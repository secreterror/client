import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Loader from '../loader/loader'
import Welcome from '../welcome/Welcome';
import {Button} from '@material-ui/core'
import { setLoading } from '../loader/loaderSlice';
import About from '../about/About';

export default function Home(){
    const isLoading=useSelector((state)=>state.loader.isLoading)
    const dispatch=useDispatch()
    const [tok,setToken]=React.useState(0)
    // React.useEffect(()=>{
    //     const token=window.localStorage.getItem('token');
    //     if(token!=null){
    //         setToken(1);

    //     }
    // },[])
    return(
        <div>
          hey this is home
        </div>

    )
}