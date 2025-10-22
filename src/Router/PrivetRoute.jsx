import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user} = use(AuthContext)
    if(user){
        return children;
    }
    return (
       <Navigate to='/login'></Navigate> 
    );
};

export default PrivetRoute;