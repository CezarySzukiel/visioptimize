import { Box, Typography } from "@mui/material";
import { headerHeight } from "../pageSettings";

const AboutUs: React.FC = () => {
  return (
    <Box paddingTop={headerHeight} minHeight="75vh">
      <h1>cośik o mie samym</h1>
      <Typography variant="h4" component="h2" gutterBottom>
        Lubię pomagać więc postanowiłem pomagać
      </Typography>
    </Box>
  );
};

export default AboutUs;
