import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { headerHeight } from "../pageSettings";
import ContactForm from "./ContactForm";

const OfferDetail: React.FC<{ offer: any }> = ({ offer }) => {
  return (
    <Box
      sx={{
        paddingTop: headerHeight,
        height: "75vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container sx={{ paddingTop: headerHeight }}>
        <Typography variant="h1" component="h1" gutterBottom>
          {offer.name}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          gutterBottom
          sx={{ marginTop: "2rem", whiteSpace: "pre-line" }}
        >
          {offer.description}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{ marginTop: "1rem" }}
        >
          Cena: {offer.price}
        </Typography>
      </Container>
      <ContactForm />
    </Box>
  );
};

export default OfferDetail;
