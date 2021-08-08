import {createSlice} from '@reduxjs/toolkit'

export const homeSlice=createSlice({
    name:"home",
    initialState:{
        token:'',
        signedIn:false,
        userName:''
    },
    reducers:{
        setSignedToken:(state,action)=>{
            console.log(action.payload)
            const {token,userName}=action.payload
            state.token=token
            state.signedIn=true;
            state.userName=userName
        },
        clearSignedToken:(state,action)=>{
            state.token=''
            state.userName=''
            state.signedIn=false
        }
    }
})

export const {setSignedToken,clearSignedToken}=homeSlice.actions
export default homeSlice.reducer