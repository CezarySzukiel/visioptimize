import Paper from "@mui/material/Paper";
import { AppBar } from "@mui/material";
import HeroSection from "./Hero";
import AboutSection from "./About";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default Home;
