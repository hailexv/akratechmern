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

  const contacts = useSelector(({contact}) => contact.contacts);

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

          {contacts ? contacts.map((contact, i) => 
            
            <Box>
              
              <ListItem>
                <ListItemAvatar>
                <Avatar
                        alt="Remy Sharp"
                        src={contact.picture.large}
                        sx={{ width: 50, height: 50 }}
                      />
                </ListItemAvatar>
                <ListItemText primary={`${contact.name.title} ${contact.name.first} ${contact.name.last}`} secondary={contact.phone} />
              </ListItem>
              <Divider variant="inset" component="li" />
              </Box>

          ) : ''}
         
            
          </List>

          </Grid>

        </>
    )

}

export default ContactList;