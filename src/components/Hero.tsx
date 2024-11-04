import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  headerHeight,
  containersColor,
  containersBorderRadius,
} from "../pageSettings";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "40vh",
          textAlign: "center",
          padding: "2rem",
          borderRadius: containersBorderRadius,
          color: "white",
          paddingTop: headerHeight,
          background: `linear-gradient(to bottom, ${theme.palette.secondary.main}, #202020)`,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Zbuduj z nami swoją markę
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Profesjonalne SEO wizytówek google i stron internetowych
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;
