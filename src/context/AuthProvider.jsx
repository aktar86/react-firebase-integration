import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email,  password)
    }

    const signOutUser = () => {
        return signOut(auth)
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


    //useEffect bujlam bairer bisoy handle kore, kintu ekane kibave bairer bisoy handle kortese bujiye diba?
    
    
    useEffect( () => {
        //set the observer
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser in the state change: ', currentUser);
            setUser(currentUser)
        })

        // clean the observe 
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
    }

    return (
        <AuthContext value={authInfo}>
                {children}
        </AuthContext>
    );
};

export default AuthProvider;