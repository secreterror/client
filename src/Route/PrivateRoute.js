import { Route,Redirect } from "react-router-dom"
import {useSelector} from 'react-redux'
const PrivateRoute=({component:Component,...rest})=>{
    const loggedIn= useSelector(state =>state.home.signedIn)
    return(
        <Route {...rest} render={props=>(
            loggedIn?
            <Component {...props}/>
            :<Redirect to='/'/>    

        )}/>
    )
}
export default PrivateRoute;