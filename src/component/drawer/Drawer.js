import React from "react";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactIcon from "@material-ui/icons/Phone";
import { useHistory, withRouter } from "react-router-dom";

import AppBar from "../appbar/AppBar";
import { useSelector, useDispatch } from "react-redux";
import { openDrawer } from "../appbar/appBarSlice";
const useStyles = makeStyles({
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
  },
});

function Drawer(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { history } = props;

  const handleDrawerOpen = () => {
    console.log(isDrawerOpen);
    dispatch(openDrawer({ set: false }));
  };
  const isDrawerOpen = useSelector((state) => state.appBar.isDrawerOpen);

  const navItem = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => {
        handleDrawerOpen();
        return history.push("/home");
      },
    },
    {
      text: "About",
      icon: <InfoIcon />,
      onClick: () => {
        handleDrawerOpen();
        return history.push("/about");
      },
    },
    {
      text: "Contact Us",
      icon: <ContactIcon />,
      onClick: () => {
        handleDrawerOpen();
        return history.push("/contact");
      },
    },
  ];
  return (
    <div>
      <AppBar />
      <MUIDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {navItem.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
    </div>
  );
}
export default withRouter(Drawer);
