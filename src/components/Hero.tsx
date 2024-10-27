import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { HeaderHeight } from '../pageSettings';

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
          backgroundColor: 'rgb(0 0 0 / 50%)',
          padding: '2rem',
          borderRadius: '8px',
          color: 'white',
          marginTop: HeaderHeight,
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