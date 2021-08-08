import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userName: "",
    password: "",
    loggedIn: 0,
    error: {
      userName: "",
      password: "",
    },
    showPassword: false,
  },
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload.userName;
      
      if(state.userName.length>0){
        state.error.userName=''
      }

    },
    setPassword: (state, action) => {
      state.password = action.payload.password;

      if(state.password.length>0){
        state.error.password=''
      }
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
    },
    setUsernameError: (state, action) => {
     state.error.userName=action.payload.error.userName
     
    },
    setPasswordError: (state, action) => {
      state.error.password = action.payload.error.password;
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload.showPassword;
    },
    setLoginError:(state,action)=>{
      console.log(action)
      const err=action.payload.error
      console.log(err)
      state.error={...state.error,...err}
      console.log(state.error)

    },
    handleLogin:(state,action)=>{}
  },
});

export const {
  setLoggedIn,
  setPassword,
  setPasswordError,
  setShowPassword,
  setUsername,
  setUsernameError,
  handleLogin,
  setLoginError
} = loginSlice.actions;
export default loginSlice.reducer;
