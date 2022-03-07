import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

// @material-ui/core components
import { 

  Grid,

} from "@mui/material";

// import widgets
import ContactList from './widgets/ContactList';
import ContactDetail from './widgets/ContactDetail';
import Header from "./widgets/Header";

function App() {


  return (
    <>
    
    <Header />
      <Grid container component="main" sx={{ height: '100vh' }}>

          <ContactList />
          <ContactDetail />

        </Grid>

    </>
  );
}

export default App;
