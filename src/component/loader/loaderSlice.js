import {createSlice} from '@reduxjs/toolkit'

export const loaderSlice=createSlice({
    name:'loader',
    initialState:{
        isLoading:false
    },
    reducers:{
        setLoading:(state,action)=>{
            console.log('action')
            console.log(action)
            state.isLoading=action.isLoading;
        }
    }
})
export const {setLoading}=loaderSlice.actions
export default loaderSlice.reducer