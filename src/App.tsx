import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, orange, blue } from "@mui/material/colors";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Parallax } from "react-parallax";

function App() {
  const element = useRoutes(routes);
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[900],
      },
      secondary: {
        main: orange[500],
      },
      error: {
        main: red.A400,
      },
      warning: {
        main: orange[500],
      },
      info: {
        main: blue[500],
      },
      success: {
        main: blue[500],
      },
      text: {
        primary: "#ffffff",
        secondary: "#ffffff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Parallax bgImage="/bgr.jpg" strength={300}>
        <Header />
        {element}
        <Footer />
      </Parallax>
    </ThemeProvider>
  );
}

export default App;
