import React, { useEffect } from 'react';
import {logout} from "../../ApiRequest/ApiRequest.js"; 

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
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;
