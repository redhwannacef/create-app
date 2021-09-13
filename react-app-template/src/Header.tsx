import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { H6 } from "./Typography";

const Header = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
      <H6>My App</H6>
      <nav>
        <Button component={RouterLink} to="/" color="inherit">
          Home
        </Button>
        <Button component={RouterLink} to="/about" color="inherit">
          About
        </Button>
      </nav>
    </Toolbar>
  </AppBar>
);

export default Header;
