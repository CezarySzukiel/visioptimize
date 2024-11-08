import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { red, orange, blue, yellow } from "@mui/material/colors";
import { breakpoints } from "@mui/system";

let baseTheme = createTheme();

const theme = createTheme({
  ...baseTheme,
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
      main: "#c0c0c0",
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
      fontSize: "2.5rem",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "2rem",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
    },
    h2: {
      fontSize: "2rem",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "1.75rem",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "1.5rem",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1.25rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "1.25rem",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
    },
    h5: {
      fontSize: "1.25rem",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "1.125rem",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
    },
    h6: {
      fontSize: "1rem",
      [baseTheme.breakpoints.down("xs")]: {
        fontSize: "0.5rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "0.625rem",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "0.75rem",
      },
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "0.875rem",
      },
      [baseTheme.breakpoints.down("xl")]: {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "1rem",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "0.875rem",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "0.75rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "0.625rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      [baseTheme.breakpoints.down("lg")]: {
        fontSize: "0.75rem",
      },
      [baseTheme.breakpoints.down("md")]: {
        fontSize: "0.625rem",
      },
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "0.5rem",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 850,
      lg: 1100,
      xl: 1920,
    },
  },
});

export default theme;
