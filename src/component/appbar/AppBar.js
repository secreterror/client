import React from "react";
import {
  AppBar as MUIAppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { openDrawer } from "./appBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { clearSignedToken } from "../home/homeSlice";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

export default function AppBar() {
  const dispatch = useDispatch();
  const loggedIn= useSelector(state =>state.home.signedIn)
  // const loggedIn=true;
  const classes = useStyles();

  const handleDrawerOpen = () => {
    dispatch(openDrawer({ set: true }));
  };
  const handleLogout=()=>{
    window.localStorage.removeItem('token')
    dispatch(clearSignedToken());
  }

  return (
    <Box item>
      <MUIAppBar>
        <Toolbar>
          {loggedIn ? (
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          ) : (
            <></>
          )}
          <Typography variant="h6" style={{flexGrow:1}}>Binary Veda</Typography>
         
          {loggedIn ? (
            <IconButton aria-label="logout" onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          ) : (
            <></>
          )}
         
        </Toolbar>
      </MUIAppBar>
      <div className={classes.offset} />
    </Box>
  );
}
