import axios from 'axios'

export function handleSignup(data) {
    const {firstName,lastName,userName,email,password} = data.user;
    return axios.request({
        method:'post',
        url:'https://bv-web-api.herokuapp.com/api/auth/register',
        data:{
            firstName,
            lastName,
            userName,
            email,
            password
        }
    })
}