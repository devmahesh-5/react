import React from 'react'
import authService from '../../Appwrite/auth';
import {useDispatch} from 'react-redux';
import { logout } from '../../../store/authslice';
function LogoutBtn() {
    const dispatch=useDispatch();
    const  logoutHandler=()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout());
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <button>Logout</button>
    )
}

export default LogoutBtn
