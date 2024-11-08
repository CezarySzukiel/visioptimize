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
import {
  containersColor,
  containersBorderRadius,
  imgSize,
} from "../pageSettings";
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
        <Typography variant="h4" component="h4" sx={{ textAlign: "center" }}>
          {text}
        </Typography>
      </CardContent>
    </CenterBox>
  );
};

const LocalGridItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Grid item xs={6} sm={6} md={6}>
      {children}
    </Grid>
  );
};

const IntroSection: React.FC = () => {
  const theme = useTheme();

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
            <LocalGridItem>
              <CenterBox>
                <Box
                  component="img"
                  src="pozycjonowanie.png"
                  alt="Telefon, na którym stoi globus z pinezką pozycjonowania"
                  sx={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                    boxShadow: `0px 0px 15px 0px ${theme.palette.primary.dark}`,
                  }}
                />
              </CenterBox>
            </LocalGridItem>
            <LocalGridItem>
              <TextSection
                text={"Popraw widoczność Twojej firmy w internecie."}
              />
            </LocalGridItem>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <LocalGridItem>
              <TextSection text={"Znajdź nowych klientów"} />
            </LocalGridItem>
            <LocalGridItem>
              <CenterBox>
                <Box
                  component="img"
                  src="nowi klienci.png"
                  alt="ludzie na ulicy"
                  sx={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                    boxShadow: `0px 0px 15px 0px ${theme.palette.primary.dark}`,
                  }}
                />
              </CenterBox>
            </LocalGridItem>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <LocalGridItem>
              <CenterBox>
                <Box
                  component="img"
                  src="dochody.png"
                  alt="kobieta z laptopem, spadające banknoty"
                  sx={{
                    width: imgSize,
                    borderRadius: containersBorderRadius,
                    boxShadow: `0px 0px 15px 0px ${theme.palette.primary.dark}`,
                  }}
                />
              </CenterBox>
            </LocalGridItem>
            <LocalGridItem>
              <TextSection text={"Zwiększ swoje przychody."} />
            </LocalGridItem>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default IntroSection;
