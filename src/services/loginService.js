import axios from 'axios'
export  function handleLogin(userName,password){
    const res= axios.request({
        method:'post',
        url:'https://bv-web-api.herokuapp.com/api/auth/login',
        data:{
            userName,
            password
        }
    })
    return res;
}

export function validateToken(){

    

}

export function setToken(){

}