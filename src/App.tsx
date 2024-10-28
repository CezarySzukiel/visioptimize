import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, orange, blue, yellow } from "@mui/material/colors";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const element = useRoutes(routes);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#202020",
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
        main: yellow[500],
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
      <Box
        sx={{
          backgroundColor: "#202020",
          minHeight: "100vh",
        }}
      >
        <Header />
        {element}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
