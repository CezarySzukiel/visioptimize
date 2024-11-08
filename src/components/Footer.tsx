import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { footerFontSize } from "../pageSettings";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      color="primary"
      style={{ top: "auto", bottom: 0, marginTop: "10rem" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          borderTop: `1px solid ${theme.palette.secondary.light}`,
          margin: "0 0rem",
        }}
      >
        <Box
          id="kontakt"
          sx={{
            marginBottom: "2rem",
          }}
        >
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="1rem"
            sx={{ fontSize: footerFontSize }}
          >
            Visioptimize
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="1rem"
            sx={{ fontSize: footerFontSize }}
          >
            cezary.szukiel@gmail.com
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="1rem"
            sx={{ fontSize: footerFontSize }}
          >
            tel. 886354578
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="1rem"
            sx={{ fontSize: footerFontSize }}
          >
            Godziny pracy:
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="0.2rem"
            sx={{ fontSize: footerFontSize }}
          >
            Niedziela Zamknięte
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            sx={{ fontSize: footerFontSize }}
          >
            Poniedziałek 10.00-20.00
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            sx={{ fontSize: footerFontSize }}
          >
            Wtorek 10.00-20.00
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            sx={{ fontSize: footerFontSize }}
          >
            Środa 10.00-20.00
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            sx={{ fontSize: footerFontSize }}
          >
            Czwartek 10.00-20.00
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            sx={{ fontSize: footerFontSize }}
          >
            Piątek 10.00-20.00
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            sx={{ fontSize: footerFontSize }}
          >
            Sobota 10.00-20.00
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
