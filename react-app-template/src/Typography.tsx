import React from "react";
import MuiTypography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";

type Props = TypographyProps & { bold?: boolean };

export const H1 = (props: Props) => <Text variant="h1" {...props} />;
export const H2 = (props: Props) => <Text variant="h2" {...props} />;
export const H3 = (props: Props) => <Text variant="h3" {...props} />;
export const H4 = (props: Props) => <Text variant="h4" {...props} />;
export const H5 = (props: Props) => <Text variant="h5" {...props} />;
export const H6 = (props: Props) => <Text variant="h6" {...props} />;
export const P = (props: Props) => <Text variant="body1" {...props} />;
export const P2 = (props: Props) => <Text variant="body2" {...props} />;

const Text = ({ bold = false, children, ...props }: Props) => (
  <MuiTypography {...props}>
    {bold ? <b>{children}</b> : children}
  </MuiTypography>
);
