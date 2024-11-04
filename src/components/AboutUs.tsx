import { Avatar, Box, Typography, Grid } from "@mui/material";
import { headerHeight } from "../pageSettings";
import { useTheme } from "@mui/material/styles";

const AboutUs: React.FC = () => {
  const theme = useTheme();

  return (
    <Box paddingTop={headerHeight} minHeight="75vh" sx={{ marginLeft: "2rem" }}>
      <Grid container columns={2} columnSpacing={0}>
        <Box>
          <h1>cośik o mie samym</h1>
          <Typography variant="h4" component="h2" gutterBottom>
            Lubię pomagać więc postanowiłem pomagać
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            width: "40%",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              boxShadow: `inset 0 0 40px 40px ${theme.palette.primary.main}`,
              pointerEvents: "none",
              zIndex: 1,
            },
          }}
        >
          <Box
            component="img"
            src={"/Cezary Szukiel.png"}
            alt={"Cezary Szukiel"}
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              position: "relative",
              zIndex: 0,
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutUs;
