import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
          margin: "0 3rem",
        }}
      >
        <Box id="kontakt" sx={{ marginBottom: "2rem" }}>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="1rem"
          >
            Visioptimize
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="1rem"
          >
            cezary.szukiel@gmail.com
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="1rem"
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
          >
            Godziny pracy:
          </Typography>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            marginTop="0.2rem"
          >
            Niedziela Zamknięte
          </Typography>
          <Typography variant="body1" component="p" color="inherit">
            Poniedziałek 10.00-20.00
          </Typography>
          <Typography variant="body1" component="p" color="inherit">
            Wtorek 10.00-20.00
          </Typography>
          <Typography variant="body1" component="p" color="inherit">
            Środa 10.00-20.00
          </Typography>
          <Typography variant="body1" component="p" color="inherit">
            Czwartek 10.00-20.00
          </Typography>
          <Typography variant="body1" component="p" color="inherit">
            Piątek 10.00-20.00
          </Typography>
          <Typography variant="body1" component="p" color="inherit">
            Sobota 10.00-20.00
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
