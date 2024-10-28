import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./offer.css";
import offer from "../offer.json";
import { Container, Box, Typography } from "@mui/material";
import {
  headerHeight,
  containersColor,
  containersBorderRadius,
} from "../pageSettings";
import { CenterBox } from "./About";

interface Offer {
  name: string;
  price: string;
}

const CustomBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "4rem auto 0 auto",
        borderTop: "1px solid white",
        display: "flex",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

const OfferBox: React.FC<Offer> = ({ name, price }) => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "20vh",
          textAlign: "center",
          padding: "1rem",
          borderRadius: containersBorderRadius,
          color: "white",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {name}
        </Typography>

        <Typography variant="h6" component="p" gutterBottom>
          Cena {price}
        </Typography>
      </Box>
    </Container>
  );
};

const OfferSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: "slick-dots",
    easing: "linear",
    swipeToSlide: true,
  };
  const [nav1, setNav1] = useState<any | null>(null);
  const [nav2, setNav2] = useState<any | null>(null);
  let sliderRef1 = useRef<any>(null);
  let sliderRef2 = useRef<any>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Nasza oferta
        </Typography>
      </Box>
      <CustomBox>
        <Typography variant="h3" component="h2" gutterBottom>
          Pakiety
        </Typography>
      </CustomBox>
      <Slider {...settings} ref={sliderRef1} asNavFor={nav2}>
        {offer.packages.map((offer) => (
          <div key={offer.name}>
            <OfferBox name={offer.name} price={offer.price} />
          </div>
        ))}
      </Slider>
      <CustomBox>
        <Typography variant="h3" component="h2" gutterBottom>
          Wizytówki google
        </Typography>
      </CustomBox>
      <Slider {...settings} asNavFor={nav1}>
        {offer.google_my_business.map((offer) => (
          <div key={offer.name}>
            <OfferBox name={offer.name} price={offer.price} />
          </div>
        ))}
      </Slider>
      <CustomBox>
        <Typography variant="h3" component="h2" gutterBottom>
          Strony internetowe
        </Typography>
      </CustomBox>
      <Slider {...settings} asNavFor={nav1}>
        {offer.websites.map((offer) => (
          <div key={offer.name}>
            <OfferBox name={offer.name} price={offer.price} />
          </div>
        ))}
      </Slider>
      <CustomBox>
        <Typography variant="h3" component="h2" gutterBottom>
          Aplikacje
        </Typography>
      </CustomBox>
      <Slider {...settings} asNavFor={nav1}>
        {offer.applications.map((offer) => (
          <div key={offer.name}>
            <OfferBox name={offer.name} price={offer.price} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default OfferSection;
