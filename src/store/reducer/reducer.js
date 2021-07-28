import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import appBarReducer from "../../component/appbar/appBarSlice";
import homeReducer from "../../component/home/homeSlice";
import  loaderReducer  from "../../component/loader/loaderSlice";
import loginReducer from '../../component/login/loginSlice'
import signupReducer from "../../component/signup/signUpSlice";

const reducers={
    appBar: appBarReducer,
    login:loginReducer,
    signup:signupReducer,
    loader:loaderReducer,
    home:homeReducer
};

export default reducers;
