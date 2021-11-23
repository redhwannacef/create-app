import * as React from "react";
import type { LinksFunction, MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  useCatch,
  ScrollRestoration,
  Scripts,
  Link,
  Outlet,
} from "remix";

import globalStylesUrl from "~/styles/global.css";
import darkStylesUrl from "~/styles/dark.css";

export const meta: MetaFunction = () => ({ title: "Redhwan Nacef" });

export const links: LinksFunction = () => [
  {
    rel: "preload",
    as: "font",
    href: "/fonts/OpenSans-Regular.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/OpenSans-SemiBold.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "stylesheet", href: globalStylesUrl },
  {
    rel: "stylesheet",
    href: darkStylesUrl,
    media: "(prefers-color-scheme: dark)",
  },
];

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

const Document = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      {title ? <title>{title}</title> : null}
      <Meta />
      <Links />
    </head>
    <body className="font-sans text-primary bg-primary">
      <ScrollRestoration />
      <Scripts />
      {children}
      {process.env.NODE_ENV === "development" && <LiveReload />}
    </body>
  </html>
);

export const CatchBoundary = () => {
  const caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <p>This page doesn't exist</p>
          <Link to="/">Back to home page</Link>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <p>Oops, sorry something went wrong on my side.</p>
      <Link to="/">Back to home page</Link>
    </Document>
  );
};
