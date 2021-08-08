import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Loader from '../loader/loader'
import Welcome from '../welcome/Welcome';
import {Button, Container} from '@material-ui/core'
import { setLoading } from '../loader/loaderSlice';
import About from '../about/About';

export default function Home(){
    const isLoading=useSelector((state)=>state.loader.isLoading)
    const dispatch=useDispatch()
    const [tok,setToken]=React.useState(0)
    return(
        <Container>
          Hi,There <br></br>
          You have successfully signedIn.<br></br>
          Thanks.
        </Container>

    )
}