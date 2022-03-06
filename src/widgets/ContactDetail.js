import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

// mui components
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
  Paper,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel ,
  CardMedia,
  CardActions,
  CardHeader
} from "@mui/material";

// mui icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function ContactDetail() {

    return (
        <>

    <Grid item sm={4} md={8} component={Paper} elevation={6} square style={{
      backgroundImage: 'url("assets/images/rain-grey.png")'
    }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Card sx={{ maxWidth: 345 }}>

              <Box display="flex" justifyContent="center" alignItems="center" p={2} style={{
                background: '#3C4252'
              }}>
              <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/women/36.jpg"
                sx={{ width: 200, height: 200 }}
              />
              </Box>
  
              <CardContent sx={{ width: 345 }}>
                
                <Grid container direction="row" alignItems="center">
                    <AccountCircleIcon color="primary"  />  <Typography pl={2} variant="h5" component="div">
                   Lizard Lizard
                </Typography>
                </Grid>
              </CardContent>
              <CardActions style={{  
                  justifyContent: 'center',
                  marginBottom: '1rem'
              }} >
              <Button color="error" variant="contained" >
                Get Contacts
              </Button>
              </CardActions>
        </Card>
          </Box>
        </Grid>

        </>
    )

}

export default ContactDetail;