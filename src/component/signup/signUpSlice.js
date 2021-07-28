import {createSlice} from '@reduxjs/toolkit'

export const signUpSlice=createSlice({
    name:'signUp',
    initialState:{
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
        agree:false,
        error:{
            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            agree:'',
            password:'',
            total:0
        }
    },
    reducers:{
        setSignUpUserName:(state,action)=>{
            const userName=action.payload.userName;
            state.userName=userName
            if( userName.length < 5){
                state.error.userName='Username must be greater than 4 characters.'
            }else{
                state.error.userName=''
            }
        },
        setSignUpFirstName:(state,action)=>{
            state.firstName=action.payload.firstName
            if(state.firstName.length > 0){
                state.error.firstName=''
            }else{
                state.error.firstName='This is a required field'
            }

        },
        setSignUpLastName:(state,action)=>{
            state.lastName=action.payload.lastName
            if(state.lastName.length > 0){
                state.error.lastName=''
            }else{
                state.error.lastName='This is a required field'
            }


        },
        setSignUpEmail:(state,action)=>{
            state.email=action.payload.email
            if(state.email.length > 0){
                state.error.email=''
            }else{
                state.error.email='This is a required field'
            }

        },
        setSignUpPassword:(state,action)=>{
            state.password=action.payload.password

            if(state.password.length<4){
                state.error.password='Password must be greater than three characters.'
            }else{
                state.error.password=''
            }

        },
        setIsAgree:(state,action)=>{
            console.log(action)
            state.agree=action.payload.agree
            if(state.agree){
                state.error.agree=''
            }
        },
        setSignUpError:(state,action)=>{
            console.log(action)
            const err=action.payload.error
            console.log(err)
            state.error={...state.error,...err};
            console.log(state.error)
        },
        handleUserSignup:(state,action)=>{
            if(state.error.total!==0){
                alert('nahi ho payega')
            }
        }

    }
})

export const {setIsAgree,setSignUpEmail,setSignUpError,setSignUpFirstName,setSignUpLastName,setSignUpPassword,setSignUpUserName,handleUserSignup}=signUpSlice.actions
export default signUpSlice.reducer;