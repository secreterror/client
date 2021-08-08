import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Loader from '../loader/loader'
import Welcome from '../welcome/Welcome';
import {Button, Container, Typography} from '@material-ui/core'
import { setLoading } from '../loader/loaderSlice';
import About from '../about/About';

export default function Home(){
    const isLoading=useSelector((state)=>state.loader.isLoading)
    const userName=useSelector((state)=>state.home.userName)
    const dispatch=useDispatch()
    const [tok,setToken]=React.useState(0)
    return(
        <Container>
          <Typography variant='h5'>Hi,{'  '+userName} </Typography><br></br>
          Please also visit the about section for backend deployed link.
          <br></br>
          In case of any error please contact me.<br></br>
          You have successfully LoggedIn<br></br>
          Thanks.
        </Container>

    )
}