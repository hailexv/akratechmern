import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

// mui components
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Grid,
  Typography,
  Paper,
  Avatar,
  CardActions,
  Chip
} from "@mui/material";

// mui icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Actions
import * as Actions from '../store/actions/contact';

var deleteTracker = false;

function ContactDetail() {

  const selectedContact = useSelector(({contact}) => contact.selectedContact);
  const deleteContactState = useSelector(({contact}) => contact.deleteContact);
  const deletingContact = useSelector(({contact}) => contact.deletingContact);
  const contacts = useSelector(({contact}) => contact.contacts);
  const counter = useSelector(({contact}) => contact.counter);
  const [deleteClicked, setDeleteClicked] = useState(false);

  const dispatch = useDispatch();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  var newCounter = 10;

  async function deleteContact() {

    deleteTracker = true;

    setDeleteClicked(true)
    dispatch(Actions.deleteContact())
    dispatch(Actions.deletingContact(selectedContact.email))

    for (let i = 0; i < 10; i++) {

      if(deleteTracker) {

        await sleep(1300);
        dispatch(Actions.setCounter(newCounter-1))
        newCounter--;

      } else {

        dispatch(Actions.setCounter(10))
        newCounter=10;

        break
      }
    
    }


  }


  function cancelDelete() {

    deleteTracker = false;
    setDeleteClicked(false)
    dispatch(Actions.cancelDelete())
    dispatch(Actions.deletingContact(null))

  }

  useEffect(async () => {

    if(counter == 0) {
      if(deleteContactState) {
        if(deletingContact == selectedContact.email) {
          dispatch(Actions.selectContact(null))
        }
        var filtered = contacts.filter(function(contact) { return contact.email != deletingContact });
        dispatch(Actions.removeContact(filtered))
        dispatch(Actions.setCounter(10))
        
        dispatch(Actions.deletingContact(null))
        
        setDeleteClicked(false)
      } else {
        console.log('not deleted')
      }
    }
    
});

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

            {
              selectedContact ?

              <Card sx={{ maxWidth: 345 }}>

              <Box display="flex" justifyContent="center" alignItems="center" p={2} style={{
                background: '#3C4252'
              }}>
              <Avatar
                alt="Remy Sharp"
                src={selectedContact.picture.large}
                sx={{ width: 200, height: 200 }}
              />
              </Box>
  
              <CardContent sx={{ width: 345 }}>
                
                <Grid container direction="row" alignItems="center">
                    <AccountCircleIcon color="primary"  />  <Typography pl={2} variant="h5" component="div">
                    {`${selectedContact.name.title} ${selectedContact.name.first} ${selectedContact.name.last}`}
                </Typography>
                </Grid>
              </CardContent>
              <CardActions style={{  
                  justifyContent: 'center',
                  marginBottom: '1rem'
              }} >
                {
                  deleteClicked && deletingContact == selectedContact.email ? <Button onClick={cancelDelete} color="warning" variant="contained" endIcon={<Chip label={counter} size="small" />} >
                  Cancel Delete 
                </Button> : deletingContact ? '' : <Button onClick={ deleteContact } color="error" variant="contained" >
                Delete contact
              </Button>
                }
              
              </CardActions>
        </Card>
        : <h1>no contact selected</h1>
            }
          
          </Box>
        </Grid>

        </>
    )

}

export default ContactDetail;