import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Container,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";

import { useSelector, useDispatch } from "react-redux";

import React from "react";
import {
  setPassword,
  setShowPassword,
  setUsername,
  setUsernameError,
  setPasswordError,
  setLoggedIn,
  handleLogin,
} from "./loginSlice";
import {Link as Lik} from 'react-router-dom'
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
}));

export default function Login({history}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const classes = useStyles();

  const handleUserNameChange = (e) => {
    dispatch(setUsername({ userName: e.target.value }));
  };
  const handlePasswordChange = (e) => {
    dispatch(setPassword({ password: e.target.value }));
  };
  const handleClickShowPassword = () => {
    dispatch(setShowPassword({ showPassword: !user.showPassword }));
  };
  const handleLoginSubmission=(e)=>{
    const {userName,password}=user
    let total=0;
    if (userName.length === 0) {
      total += 1;
      dispatch(
        setUsernameError({ error: { userName: "Please enter a valid username" } })
      );
    }
    if (password.length === 0) {
      total += 1;
      dispatch(
        setPasswordError({ error: { password: "Please enter a valid password" } })
      );
    }
    if(total===0){
      dispatch(handleLogin({user}))
    }

    e.preventDefault();
  }

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form onSubmit={handleLoginSubmission}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={user.error.userName.length === 0 ? false : true}
                id="standard-error-helper-text"
                label="User Name"
                name='userName'
                fullWidth
                helperText={user.error.userName}
                type="text"
                onChange={handleUserNameChange}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <InputAdornment>
                        <PersonSharpIcon />
                      </InputAdornment>
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={user.error.password.length === 0 ? false : true}
                id="standard-error-helper-text"
                label="Password"
                name='password'
                fullWidth
                helperText={user.error.password}
                type={user.showPassword ? "text" : "password"}
                onChange={handlePasswordChange}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleClickShowPassword}>
                      <InputAdornment>
                        {user.showPassword ? <VisibilityOff /> : <Visibility />}
                      </InputAdornment>
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Log In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Forgot Password
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
