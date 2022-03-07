import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

// @material-ui/core components
import { 
  Box, 
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  Divider
} from "@mui/material";


// Actions
import * as Actions from '../store/actions/contact';


function ContactList() {

  const dispatch = useDispatch();

  const contacts = useSelector(({contact}) => contact.contacts);
  const selectedContact = useSelector(({contact}) => contact.selectedContact);
  const deletingContact = useSelector(({contact}) => contact.deletingContact);
  const counter = useSelector(({contact}) => contact.counter);

  function selectContact(email) {
    const contact = contacts.find(contact => contact.email == email);

    dispatch(Actions.selectContact(contact))
    
  }

    return (
        <>

        <Grid
          item
          pt={2}
          xs={12} sm={12} md={4}
          sx={{
            backgroundColor: '#CDC7BE',
            backgroundRepeat: 'no-repeat',   
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          <List>

          {contacts ? contacts.map((contact, i) => 
            
            <Box >
              
              <ListItem sx={{
              backgroundColor: selectedContact && selectedContact.email == contact.email ? '#E2DEA9' : ''
            }} onClick={() => {
              selectContact(contact.email)
            }}>
                <ListItemAvatar>
                <Avatar
                        alt="Remy Sharp"
                        src={contact.picture.large}
                        sx={{ width: 50, height: 50 }}
                      />
                </ListItemAvatar>
                <ListItemText primary={`${contact.name.title} ${contact.name.first} ${contact.name.last}`} secondary={contact.phone} />

                {
                 selectedContact && selectedContact.email !== contact.email && deletingContact == contact.email ? <Chip label={counter} color="warning" size="small" /> : ''
                }
                
              </ListItem>
              <Divider variant="inset" component="li" />
              </Box>

          ) : <box m={2}><h2>Click on get contacts to fetch contacts</h2></box>}
         
            
          </List>

          </Grid>

        </>
    )

}

export default ContactList;