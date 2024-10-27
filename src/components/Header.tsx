import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, orange, blue } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { headerHeight } from '../pageSettings';

const Header: React.FC = () => {
  return (
        <AppBar sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: headerHeight,
            }}
        >
          <Toolbar>
            <Box display="flex" alignItems="center">
          <img src="/Visioptimize_logo.png" alt="Logo" style={{ marginRight: '16px', height: '40px' }} />
          <Typography variant="h5" component="h5">
            Visioptimize
          </Typography>
        </Box>
        <Box flexGrow={1} />
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
  );
};

export default Header;