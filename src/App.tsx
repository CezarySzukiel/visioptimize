import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, CssBaseline } from "@mui/material";
import theme from "./theme";

function App() {
  const element = useRoutes(routes);

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
