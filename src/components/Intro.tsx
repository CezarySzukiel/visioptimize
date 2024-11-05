import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Stack,
  CardContent,
} from "@mui/material";
import { containersColor, containersBorderRadius } from "../pageSettings";
import { useTheme } from "@mui/material/styles";

interface TextSectionProps {
  text: string;
}

export const CenterBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};
const TextSection: React.FC<TextSectionProps> = ({ text }) => {
  return (
    <CenterBox>
      <CardContent>
        <Typography variant="h6" component="h6" sx={{ textAlign: "center" }}>
          {text}
        </Typography>
      </CardContent>
    </CenterBox>
  );
};
const IntroSection: React.FC = () => {
  const theme = useTheme();
  const imgSize: string = "200px";

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "2rem",
        marginBottom: "5rem",
      }}
    >
      <Stack spacing={4}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CenterBox>
                <img
                  src="pozycjonowanie.jpg"
                  alt="Telefon, na którym stoi globus z pinezką pozycjonowania"
                  style={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                    boxShadow: `0px 0px 15px 0px ${theme.palette.primary.dark}`,
                  }}
                />
              </CenterBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextSection
                text={"Popraw widoczność Twojej firmy w internecie."}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextSection text={"Znajdź nowych klientów"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CenterBox>
                <img
                  src="nowi klienci.jpg"
                  alt="ludzie na ulicy"
                  style={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                    boxShadow: `0px 0px 15px 0px ${theme.palette.primary.dark}`,
                  }}
                />
              </CenterBox>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CenterBox>
                <img
                  src="dochody.jpg"
                  alt="kobieta z laptopem, spadające banknoty"
                  style={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                    boxShadow: `0px 0px 15px 0px ${theme.palette.primary.dark}`,
                  }}
                />
              </CenterBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextSection text={"Zwiększ swoje przychody."} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default IntroSection;
