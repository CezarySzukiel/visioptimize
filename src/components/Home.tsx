import Paper from "@mui/material/Paper";
import { AppBar } from "@mui/material";
import HeroSection from "./Hero";
import IntroSection from "./Intro";
import OfferSection from "./Offer";

function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <OfferSection />
    </div>
  );
}

export default Home;
