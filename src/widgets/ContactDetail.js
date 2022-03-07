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


var selectedContactClone = {};

function ContactDetail(props) {

  const selectedContact = useSelector(({contact}) => contact.selectedContact);
  const deletingContacts = useSelector(({contact}) => contact.deletingContacts);
  const contacts = useSelector(({contact}) => contact.contacts);

  
  const [deleteClicked, setDeleteClicked] = useState(false);

  const dispatch = useDispatch();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  async function deleteContact() {

    var newCounter = 10;

    const email = selectedContact.email;

    setDeleteClicked(true)

    dispatch(Actions.deleteContact(email))

    

    for (let i = 0; i < 10; i++) {

      console.log(newCounter)

      if(deletingContacts.find(contact => contact.email == email)) {

        await sleep(1300);
        dispatch(Actions.setCounter(newCounter-1, email))
        newCounter--;
        
      } else {


        break
      }
    
    }

    if(newCounter == 0) {

      dispatch(Actions.removeContact(email))

      dispatch(Actions.cancelDelete(email))

      if(email == selectedContactClone.email) {
        dispatch(Actions.selectContact(null))
      }

    }


  }


  function cancelDelete() {

    dispatch(Actions.cancelDelete(selectedContact.email))

  }

  useEffect(() => {
    selectedContactClone = selectedContact;
}, [dispatch, selectedContact]);

 

    return (
        <>

    <Grid item xs={12} md={8} component={Paper} elevation={6} square style={{
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
                  (deletingContacts.findIndex(contact => contact.email == selectedContact.email ) != -1) ? <Button onClick={cancelDelete} color="warning" variant="contained" endIcon={<Chip label={deletingContacts[deletingContacts.findIndex(contact => contact.email == selectedContact.email)].counter} size="small" />} >
                  Cancel Delete 
                </Button> : <Button onClick={ deleteContact } color="error" variant="contained" >
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