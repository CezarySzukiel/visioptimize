import Paper from "@mui/material/Paper";
import { AppBar } from "@mui/material";
import HeroSection from "./Hero";
import AboutSection from "./About";
import OfferSection from "./Offer";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OfferSection />
    </div>
  );
}

export default Home;
