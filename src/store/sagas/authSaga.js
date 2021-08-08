import { call ,put} from "redux-saga/effects";
import { setSignedToken } from "../../component/home/homeSlice";
import { setLoading } from "../../component/loader/loaderSlice";
import { setLoginError } from "../../component/login/loginSlice";
import { setSignUpError } from "../../component/signup/signUpSlice";
import { handleLogin } from "../../services/loginService";
import { handleSignup } from "../../services/signupService";

export function* checkUserInDatabase(user){
    

    console.log(user)
    // try{
    //     const response =yield call(handleLogin)
    //     if(!response){
    //         console.log('error')
    //     }
    //     console.log(response)

    // }catch(err){
    //     console.log(err)
    // }
    
}

export function* doUserLogin({payload}){
    const {userName,password} =payload.user
    try {
        const response = yield call(handleLogin,userName,password);

        const payload=response.data
        window.localStorage.setItem('token',response.data.token);
        window.localStorage.setItem('userName',response.data.userName);

        yield put({type:setSignedToken.type,payload})
        
    }catch (error) {

        if(error.response){
            const payload=error.response.data
            yield put({type:setLoginError.type,payload})
            console.log(error.response.data)
        }
        
    }

}
export function* doUserSignUp({payload}){
    const payloa=payload
    console.log(payloa)
    try {
        const response =yield call(handleSignup,payloa)
        window.localStorage.setItem('token',response.data.token);
        window.localStorage.setItem('userName',response.data.userName);
        const payload=response.data
        yield put({type:setSignedToken.type,payload})
    } catch (error) {
        if(error.response){
            const payload=error.response.data
            yield put({type:setSignUpError.type,payload})
            console.log(error.response.data)
        }
        
        
    }
}
