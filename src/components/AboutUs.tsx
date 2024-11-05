import { Avatar, Box, Typography, Grid } from "@mui/material";
import { headerHeight } from "../pageSettings";
import { useTheme } from "@mui/material/styles";

const AboutUs: React.FC = () => {
  const theme = useTheme();
  const pFontSize = "19px";

  return (
    <Box
      paddingTop={headerHeight}
      minHeight="75vh"
      sx={{ marginLeft: "3rem", maxWidth: "100%" }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
        <Box
          id="about-text"
          sx={{
            marginTop: "5rem",
          }}
        >
          <Box>
            <Typography variant="h1" component="h1" gutterBottom>
              Nazywam się Cezary Szukiel
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              Jestem programistą z doświadczeniem w tworzeniu aplikacji
              webowych, które pomagają firmom zwiększać ich obecność w sieci.
              Moim celem jest dostarczanie narzędzi, które realnie wspierają
              rozwój i widoczność moich klientów. W swojej pracy łączę pasję do
              technologii z dążeniem do wymiernych efektów, które przynoszą
              korzyści firmom i ich klientom.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "3rem" }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Z miłości do pomagania
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              Zajmuję się SEO wizytówek Google oraz stron internetowych,
              ponieważ chcę pomagać ludziom i firmom pozyskiwać więcej klientów
              i rozwijać ich działalność. Każdy projekt jest dla mnie okazją do
              wspólnego budowania sukcesu moich klientów, a każda widoczna
              zmiana potwierdza sens mojej pracy. Dążę do tego, aby każda firma,
              która ze mną współpracuje, miała solidne podstawy do dalszego
              wzrostu.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "3rem" }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Profesjonalizm i zaangażowanie
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              Każde zlecenie traktuję indywidualnie i wkładam w nie pełne
              zaangażowanie. Moja praca to dla mnie coś więcej niż tylko zadania
              – to relacja oparta na zaufaniu i wspólnych celach. Satysfakcja
              klienta i każdy wspólny sukces to moja największa motywacja do
              ciągłego doskonalenia swoich umiejętności i usług.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "3rem" }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Umiejętności techniczne
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              W pracy korzystam z szerokiego wachlarza umiejętności
              programistycznych, w tym języków takich jak Python, JavaScript,
              TypeScript oraz frameworków Django czy React. Mam również
              doświadczenie z bazami danych oraz wieloma innymi technologiami,
              dzięki czemu mogę tworzyć rozwiązania dostosowane do unikalnych
              potrzeb każdej firmy, zapewniając pełne wsparcie techniczne.
            </Typography>
          </Box>
        </Box>
        <Box
          id="avatar"
          sx={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            minWidth: "50%",
            marginRight: "5rem",
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
            src={"/images/Cezary Szukiel.png"}
            alt={"Cezary Szukiel"}
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              position: "relative",
              zIndex: 0,
              marginRight: "5rem",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
