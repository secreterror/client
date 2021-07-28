import React from "react";
import About from "./component/about/About";
import Welcome from "./component/welcome/Welcome";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import AppBar from "./component/appbar/AppBar";
import Drawer from "./component/drawer/Drawer";
import Contact from "./component/contact/contact";
import Login from "./component/login/Login";
import {Box } from '@material-ui/core'
import SignUp from "./component/signup/SignUp";
import Home from "./component/home/home";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import {useSelector} from 'react-redux'
import Loader from "./component/loader/loader";
function App() {
  const loggedIn= useSelector(state =>state.home.signedIn)
  return (
    
      <BrowserRouter>
        {loggedIn?<Drawer/>:<AppBar/>}
        <Switch>
          <PublicRoute restricted={true} component={Welcome} path='/' exact/>
          <PublicRoute restricted={true} component={Login} path='/login' exact/>
          <PrivateRoute component={About} path='/about' exact/>
          <PrivateRoute component={Contact} path='/contact' exact/>
          <PrivateRoute component={Home} path='/home' exact/>
        </Switch>
        </BrowserRouter>

   
  );
}
export default App;
