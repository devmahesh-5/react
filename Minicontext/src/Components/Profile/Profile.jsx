import React from 'react'
import { useContext } from 'react'
import UserContext from '../../Context/UserContext';
function Profile() {
    const {user}=useContext(UserContext);
    if(!user) return (<div>Please Login</div>);//if user is null then return not logged in and if user is not null then return username
    return (
        <div>Welcome {user.username}</div>
    )
}

export default Profile
