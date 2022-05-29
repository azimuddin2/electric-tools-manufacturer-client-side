import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    if(loading){
        return 
    }
    
    return (
        <div>
            <h1>This is My Profile</h1>
            <h1>Full Name</h1>
            <h3>{user.displayName}</h3>
            <h1>Email Address</h1>
            <h3>{user.email}</h3>
        </div>
    );
};

export default MyProfile;