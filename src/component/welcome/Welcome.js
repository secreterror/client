import React from "react";
import { Box, Container, CssBaseline, Typography,Button,Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";
import {useState} from 'react'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container:{
    backgroundColor:'black'
  },
  heading:{
    marginBottom: theme.spacing(3),

  }
}));

export default function Welcome() {
  const classes = useStyles();
  const  [login, setlogin] = useState(0)
  return(
    <Container maxWidth="xs" >
      <CssBaseline/>
     
      <div className={classes.paper}>
      <Typography component="h1" variant='h5' className={classes.heading}>
        Hi,There
      </Typography>
      <Grid container direction='row' justify='space-between' spacing={2}>
        <Grid xs={12} sm={6}>
        <Button fullWidth variant='contained' color='primary' disabled={login===1} onClick={()=>setlogin(1)}>
          Log In
        </Button>
        </Grid>
        <Grid xs={12} sm={6}>
        <Button fullWidth variant='contained' color='secondary' disabled={login===2} onClick={()=>setlogin(2)}>
          Sign Up
        </Button>
        </Grid>
      </Grid>
      {login===0?<></>:login===1?<Login/>:<SignUp/>}
     

      </div>
    </Container>
  );
}
