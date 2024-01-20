import React, {useEffect, useState} from 'react'; 
import Layout from "../layout/layout.jsx";
import Home from "../component/Home.jsx";  
const HomePage = () => { 
    useEffect(()=>{
        document.title="Home"; 
    },[])
    
    return (
        <Layout>
            {
                <Home/>
            }
        </Layout>
    );
};
export default HomePage;