import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { red, orange, blue, yellow } from "@mui/material/colors";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, CssBaseline } from "@mui/material";

function App() {
  const element = useRoutes(routes);
  let theme = createTheme({
    palette: {
      primary: {
        main: "#202020",
        dark: "#000000",
      },
      secondary: {
        light: "#ff7961",
        main: "#492111",
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
        secondary: "#c0c0c0",
      },
    },
    transitions: {
      duration: {
        enteringScreen: 400,
        leavingScreen: 195,
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
      h1: {
        fontSize: "3rem",
      },
      h2: {
        fontSize: "2.5rem",
      },
      h3: {
        fontSize: "2rem",
      },
      h4: {
        fontSize: "1.75rem",
      },
      h5: {
        fontSize: "1.5rem",
      },
      h6: {
        fontSize: "1rem",
      },
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
    },
  });
  theme = responsiveFontSizes(theme, {
    breakpoints: ["xs", "sm", "md", "lg", "xl"],
    factor: 5,
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
