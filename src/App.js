import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

// @material-ui/core components
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  makeStyles, 
  useTheme,
  Grid,
  InputAdornment,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar 
} from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles';

// import widgets
import ContactList from './widgets/ContactList';
import ContactDetail from './widgets/ContactDetail';
import Header from "./widgets/Header";

function App() {

  const theme = createTheme();

  return (
    <>
    <ThemeProvider theme={theme}>
    <Header />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />

          <ContactList />
          <ContactDetail />

        </Grid>

    </ThemeProvider>
    
    </>
  );
}

export default App;
