import React, { Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "@mui/material";
import Header from "./Header";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "Open Sans",
    },
  })
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  </ThemeProvider>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <Container>
    <Header />
    <Suspense fallback="Loading...">
      <main>{children}</main>
    </Suspense>
    <footer />
  </Container>
);

const App = () => (
  <Providers>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  </Providers>
);

export default App;
