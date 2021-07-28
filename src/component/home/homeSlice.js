import {createSlice} from '@reduxjs/toolkit'

export const homeSlice=createSlice({
    name:"home",
    initialState:{
        token:'shhhhhhhhhhhhhhh',
        signedIn:true
    },
    reducers:{
        setSignedToken:(state,action)=>{
            console.log(action.payload)
            const {token}=action.payload
            state.token=token
            state.signedIn=true;
        },
        clearSignedToken:(state,action)=>{
            state.token=''
            state.signedIn=false
        }
    }
})

export const {setSignedToken,clearSignedToken}=homeSlice.actions
export default homeSlice.reducer