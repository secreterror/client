import { Redirect, Route } from "react-router-dom"
import {useSelector} from 'react-redux'

const PublicRoute=({component:Component,restricted,...rest})=>{
    const loggedIn= useSelector(state =>state.home.signedIn)
    return (
        <Route {...rest} render={props=>(
            loggedIn && restricted?
            <Redirect to='/home'/>:
            <Component {...props}/>
        )}/>
    )
}
export default PublicRoute;