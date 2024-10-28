import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import offer from "../offer.json";
import { Container, Box, Typography } from "@mui/material";
import {
  headerHeight,
  containersColor,
  containersBorderRadius,
} from "../pageSettings";

interface Offer {
  name: string;
  price: string;
  description: string;
}

const OfferBox: React.FC<Offer> = ({ name, price, description }) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "20vh",
          textAlign: "center",
          backgroundColor: containersColor,
          padding: "2rem",
          borderRadius: containersBorderRadius,
          color: "white",
          marginTop: headerHeight,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {description}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Cena {price} zł
        </Typography>
      </Box>
    </Container>
  );
};

const OfferSection: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log("offers", offer);
  }, [offers]);

  return (
    <>
      <h1>Pakiety</h1>
      <Slider {...settings}>
        {offer.packages.map((offer) => (
          <div key={offer.name}>
            <OfferBox
              name={offer.name}
              price={offer.price}
              description={offer.description}
            />
          </div>
        ))}
      </Slider>
      <h1>Wizytówki google</h1>
      <Slider {...settings}>
        {offer.google_my_business.map((offer) => (
          <div key={offer.name}>
            <OfferBox
              name={offer.name}
              price={offer.price}
              description={offer.description}
            />
          </div>
        ))}
      </Slider>
      <h1>Strony internetowe</h1>
      <Slider {...settings}>
        {offer.websites.map((offer) => (
          <div key={offer.name}>
            <OfferBox
              name={offer.name}
              price={offer.price}
              description={offer.description}
            />
          </div>
        ))}
      </Slider>

      <h1>Aplikacje web</h1>
      <Slider {...settings}>
        {offer.applications.map((offer) => (
          <div key={offer.name}>
            <OfferBox
              name={offer.name}
              price={offer.price}
              description={offer.description}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default OfferSection;
