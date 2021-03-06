import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import Loader from "./component/loader/loader";
import {useSelector,useDispatch} from 'react-redux'
import { clearSignedToken, setSignedToken } from "./component/home/homeSlice";
import { setLoading } from "./component/loader/loaderSlice";
function Index(){
  const isLoading=useSelector(state => state.loader.isLoading)
  const dispatch=useDispatch()

  React.useEffect(()=>{
    
    var token=localStorage.getItem('token')
    var userName=localStorage.getItem('userName')

    if(!token){
    dispatch(clearSignedToken())
    }else{
      dispatch(setSignedToken({token:token,userName:userName}))
    }

  },[])

  return(
    <div>
     <App/>
    </div>
  )
}
ReactDOM.render(
 
    <Provider store={store}>
      <Index />
    </Provider>,
  document.getElementById("root")
);
