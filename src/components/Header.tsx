import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { headerHeight } from "../pageSettings";
import offer from "../offer.json";

interface Offer {
  name: string;
  price: string;
  adres: string;
  description: string;
}

interface OfferCategory {
  packages: Offer[];
  google_my_business: Offer[];
  websites: Offer[];
  applications: Offer[];
}

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children }) => {
  const location = useLocation();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (to.startsWith("#")) {
      event.preventDefault();
      const element = document.getElementById(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleMouseClick = () => {
    console.log("nic");
  };

  const renderMenuItems = (offers: Offer[]) => {
    return offers.map((item) => (
      <MenuItem
        key={item.name}
        onClick={handleMouseLeave}
        component={Link}
        to={item.adres}
      >
        {item.name}
      </MenuItem>
    ));
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "rgba(32, 32, 32, 0.9)",
        height: headerHeight,
      }}
    >
      <Toolbar>
        <CustomLink to="/">
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
        </CustomLink>
        <Box flexGrow={1} />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CustomLink to="/#oferta">
            <Button
              aria-controls="oferta-menu"
              aria-haspopup="true"
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseClick}
              sx={{ color: "inherit", textTransform: "none" }}
            >
              Oferta
            </Button>
          </CustomLink>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMouseLeave}
            MenuListProps={{
              onMouseLeave: handleMouseLeave,
            }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: `${theme.palette.primary.main}`,
                color: "white",
                boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.75)",
              },
            }}
          >
            {renderMenuItems(offer.packages)}
            {renderMenuItems(offer.google_my_business)}
            {renderMenuItems(offer.websites)}
            {renderMenuItems(offer.applications)}
          </Menu>
          <CustomLink to="/o-nas">
            <Button sx={{ textTransform: "none" }}>
              <Box
                marginRight="1rem"
                sx={{
                  color: `${theme.palette.text.primary}`,
                }}
              >
                O nas
              </Box>
            </Button>
          </CustomLink>
          <CustomLink to="#kontakt">
            <Button sx={{ textTransform: "none" }}>
              <Box
                marginRight="1rem"
                sx={{
                  color: `${theme.palette.text.primary}`,
                }}
              >
                Kontakt
              </Box>
            </Button>
          </CustomLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
