import {takeLatest} from 'redux-saga/effects'
import { handleLogin } from '../../component/login/loginSlice'
import { setSignUpLastName,handleUserSignup } from '../../component/signup/signUpSlice'
import { checkUserInDatabase, doUserLogin, doUserSignUp } from './authSaga'

export function* watcherSaga(){
    yield takeLatest(handleUserSignup.type,doUserSignUp)
}