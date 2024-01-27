import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => { 
        localStorage.removeItem('authToken'); 
        navigate('/login');  
    }, []);
    
    return (
        <div> 
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;
