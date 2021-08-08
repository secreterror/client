import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsAgree,
  setSignUpEmail,
  setSignUpFirstName,
  setSignUpLastName,
  setSignUpPassword,
  setSignUpUserName,
  setSignUpError,
  handleUserSignup,
} from "./signUpSlice";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  component: {
    marginBottom: theme.spacing(10),
  },
  heading: {
    marginBottom: theme.spacing(10),
  },
}));

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default function SignUp() {


  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.signup);
  const isLoading=useSelector(state => state.loader.isLoading)



  const handleSignUpFormSubmit = (e) => {
    console.log("here");
    let total = 0;
    const { firstName, lastName, userName, email, password, agree} = user;
    if (firstName.length === 0) {
      total += 1;
      dispatch(
        setSignUpError({ error: { firstName: "This is a required field." } })
      );
    }
    if (lastName.length === 0) {
      total += 1;
      dispatch(
        setSignUpError({ error: { lastName: "This is a required field." } })
      );
    }
    if (userName.length === 0) {
      total += 1;
      dispatch(
        setSignUpError({ error: { userName: "Username is a required field." } })
      );
    } else if (userName.length < 5) {
      total += 1;
      dispatch(
        setSignUpError({
          error: { userName: "Username must be greater than 4 characters." },
        })
      );
    }
    if (email.length === 0) {
      total += 1;
      dispatch(
        setSignUpError({ error: { email: "Email is a required field." } })
      );
    } else if (!validateEmail(email)) {
      total += 1;
      dispatch(
        setSignUpError({ error: { email: "Please provide a valid email." } })
      );
    }
    if (password.length === 0) {
      total += 1;
      dispatch(
        setSignUpError({ error: { password: "Password is a required field." } })
      );
    } else if (password.length < 5) {
      total += 1;
      dispatch(
        setSignUpError({
          error: { password: "Password must be greater than 3 characters." },
        })
      );
    }
    if (!agree) {
      total += 1;
      dispatch(
        setSignUpError({
          error: { agree: "You must agree with the terms and conditions." },
        })
      );
    }
    if(total===0){
      dispatch(handleUserSignup({ user }));

    }
    e.preventDefault();
  };
  console.log("rendered");

  return (
    <Container maxWidth="xs" className={classes.component}>
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSignUpFormSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                error={user.error.firstName.length === 0 ? false : true}
                onChange={(e) => {
                  dispatch(setSignUpFirstName({ firstName: e.target.value }));
                }}
                required
                fullWidth
                id="firstName"
                label="First Name"
                helperText={user.error.firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => {
                  dispatch(setSignUpLastName({ lastName: e.target.value }));
                }}
                error={user.error.lastName.length === 0 ? false : true}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                helperText={user.error.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  dispatch(setSignUpUserName({ userName: e.target.value }));
                }}
                fullWidth
                required
                fullWidth
                error={user.error.userName.length === 0 ? false : true}
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="lname"
                helperText={user.error.userName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  dispatch(setSignUpEmail({ email: e.target.value }));
                }}
                error={user.error.email.length === 0 ? false : true}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={user.error.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  dispatch(setSignUpPassword({ password: e.target.value }));
                }}
                error={user.error.password.length === 0 ? false : true}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={user.error.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={user.agree}
                    onChange={(e) => {
                      console.log("clicked");
                      dispatch(setIsAgree({ agree: e.target.checked }));
                    }}
                    name="agreeConditions"
                    color="primary"
                  />
                }
                label="I agree with the term and conditions"
              />
              <FormHelperText
                error={user.error.agree.length === 0 ? false : true}
              >
                {user.error.agree}
              </FormHelperText>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isLoading}
          >
            {isLoading?"Signing Up...":"Sign Up"}
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}
