import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, orange, blue } from "@mui/material/colors";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { headerHeight } from "../pageSettings";

const Header: React.FC = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "rgba(32, 32, 32, 0.9)",
        height: headerHeight,
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src="/Visioptimize_logo.png"
            alt="Logo"
            style={{ marginRight: "16px", height: "40px" }}
          />
          <Typography variant="h5" component="h5">
            Visioptimize
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <a
            href="/#oferta"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Box marginRight="1rem">Oferta</Box>
          </a>
          <Box marginRight="1rem">O nas</Box>
          <a
            href="/#kontakt"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Box marginRight="1rem">Kontakt</Box>
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
