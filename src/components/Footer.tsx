import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      style={{ top: "auto", bottom: 0, marginTop: "20px" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
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
