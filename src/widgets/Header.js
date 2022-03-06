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
  Toolbar,
  IconButton 
} from "@mui/material";


// Icons
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// Actions
import * as Actions from '../store/actions/contact';


function Header() {

  const dispatch = useDispatch();

  function getContacts() {
    dispatch(Actions.getContacts())
  }

  return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Counter
          </Typography>
          <Button color="success" variant="contained" onClick={getContacts} endIcon={<CloudDownloadIcon />}>
            Get Contacts
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
  );
}

export default Header;
