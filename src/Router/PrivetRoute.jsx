import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router';



// what is privet Route 
// Privet Route holo kichu jinis ami user k login kora chara dekte dibo na. emon hote pare j dekase oi link a jawa jabe but click korar por sign in korte hobe then he can go.

const PrivetRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation()


    if(loading){
        return <p className='text-green-500'>Loadign...</p>
    }
    if(user){
        return children;
    }
    return (
       <Navigate state={location?.pathname} to='/login'></Navigate> 
    );
};

export default PrivetRoute;



/**
 * == in the PrivetRoute ==
 * useLocation
 * state={location?.pathname}  in the navigate link
 */


/**
 * ==In the login page==
 * going to login page and call again useLocation and set useNavigate
 * useLocation
 * useNavigate
 * state={location?.pathname}
 * 
 * 
 */