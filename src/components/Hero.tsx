import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { headerHeight, containersColor, containersBorderRadius } from '../pageSettings';

const HeroSection: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '20vh',
          textAlign: 'center',
          backgroundColor: containersColor,
          padding: '2rem',
          borderRadius: containersBorderRadius,
          color: 'white',
          marginTop: headerHeight,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Zbuduj z nami swoją markę
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Profesjonalne SEO wizytówek google i stron internetowych
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroSection;