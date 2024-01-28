import React, { useEffect } from 'react';
import {logout} from "../../ApiRequest/ApiRequest.js";
import Loader from "../../component/Loader.jsx"; 

const Logout = () => {
    const authToken = localStorage.getItem('authToken');
    useEffect(async () => {
        const response = await logout(authToken);
        if (response.status === 200) {
            localStorage.removeItem('authToken');
            window.location.href = '/login'; 
        }
    }, []);
    
    return (
        <div> 
            <Loader />
        </div>
    );
};

export default Logout;
