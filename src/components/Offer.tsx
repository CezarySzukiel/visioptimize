import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./offer.css";
import offer from "../offer.json";
import { Container, Box, Typography, Grid, Slide, Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
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

interface OfferPackage {
  title: string;
  offers: Offer[];
}

const CustomBox = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "80%",
        margin: "4rem auto 0 auto",
        borderTop: `1px solid ${theme.palette.secondary.light}`,
        display: "flex",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

const OfferBox: React.FC<Offer & { index: number }> = ({
  name,
  price,
  index,
}) => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div ref={ref}>
        <Slide
          direction="left"
          in={inView}
          timeout={{
            enter: theme.transitions.duration.enteringScreen + index * 300,
            exit: theme.transitions.duration.leavingScreen,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "20vh",
              textAlign: "center",
              padding: "1rem",
              borderRadius: containersBorderRadius,
              border: "1px solid white",
              color: "white",
              margin: "1rem",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              {name}
            </Typography>

            <Typography variant="h6" component="p" gutterBottom>
              Cena {price}
            </Typography>
          </Container>
        </Slide>
      </div>
    </Grid>
  );
};

const OfferPackage: React.FC<OfferPackage> = ({ title, offers }) => {
  return (
    <>
      <CustomBox>
        <Typography variant="h3" component="h2" gutterBottom>
          {title}
        </Typography>
      </CustomBox>
      <CenterBox>
        <Grid container spacing={2} maxWidth="80%">
          {offers.map((offer, index) => (
            <OfferBox
              key={offer.name}
              name={offer.name}
              price={offer.price}
              index={index}
            />
          ))}
        </Grid>
      </CenterBox>
    </>
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

      <OfferPackage title="Pakiety" offers={offer.packages} />

      <OfferPackage
        title="Wizytówki google"
        offers={offer.google_my_business}
      />

      <OfferPackage title="Strony internetowe" offers={offer.websites} />

      <OfferPackage title="Aplikacje" offers={offer.applications} />
    </>
  );
};

export default OfferSection;
