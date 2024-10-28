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
const AboutSection: React.FC = () => {
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
        {/* First Item */}
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CenterBox>
                <img
                  src="/pozycjonowanie.jpg"
                  alt="Telefon, na którym stoi globus z pinezką pozycjonowania"
                  style={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                  }}
                />
              </CenterBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextSection
                text={"Poprawimy Widoczność Twojej firmy w internecie."}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Second Item */}
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextSection text={"Znajdziemy dla Ciebie nowych klientów."} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CenterBox>
                <img
                  src="/nowi klienci.jpg"
                  alt="Description 2"
                  style={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                  }}
                />
              </CenterBox>
            </Grid>
          </Grid>
        </Box>

        {/* Third Item */}
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CenterBox>
                <img
                  src="dochody.jpg"
                  alt="Description 3"
                  style={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                  }}
                />
              </CenterBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextSection text={"Zwiększymy Twoje przychody."} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default AboutSection;
