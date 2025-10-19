import React, { use } from 'react';
import NavBar from '../NavBar/NavBar';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Home = () => {

    const authInfo = use(AuthContext)
    console.log(authInfo);
    return (
        <div>
            <h1>This Is Home</h1>
        </div>
    );
};

export default Home;