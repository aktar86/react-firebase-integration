import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email,  password)
    }

    // useEffect(() => {}, [])
    // useEffect(() => {
    //     //step 1: observer set
    //     //step 2: set in a variable
    //     //step 3: return and call the variable so that you can clear the ref 
    // }, [])

    // useEffect(() => {
    //     // set the observer 
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         console.log('current user in auth state change:', currentUser);
    //     })
        
    //     // clear the observer 
    //     return () => {
    //         unsubscribe()
    //     }
    // },[])


    useEffect( () => {
        //set the observer
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser in the state change: ', currentUser);
        })

        // clean the observe 
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        createUser,
        signInUser,
    }

    return (
        <AuthContext value={authInfo}>
                {children}
        </AuthContext>
    );
};

export default AuthProvider;