import axios from 'axios'

export function handleSignup(data) {
    const {firstName,lastName,userName,email,password} = data.user;
    return axios.request({
        method:'post',
        url:'http://localhost:8000/api/auth/register',
        data:{
            firstName,
            lastName,
            userName,
            email,
            password
        }
    })
}