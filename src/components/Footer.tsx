import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          Footer Content
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;