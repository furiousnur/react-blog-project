import React, { useEffect } from 'react'; 

const Logout = () => { 
    useEffect(() => { 
        localStorage.removeItem('authToken');
        window.location.href = '/login'; 
    }, []);
    
    return (
        <div> 
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;
