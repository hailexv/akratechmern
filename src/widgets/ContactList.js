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
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from "@mui/material";

import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


function ContactList() {

    return (
        <>

        <Grid
          item
          p={2}
          xs={false}
          xs={12} sm={8} md={4}
          sx={{
            backgroundColor: '#A7A7A7',
            backgroundRepeat: 'no-repeat',
        
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

<List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
        <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/women/36.jpg"
                sx={{ width: 50, height: 50 }}
              />
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>

          </Grid>

        </>
    )

}

export default ContactList;