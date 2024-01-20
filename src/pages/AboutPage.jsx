import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout.jsx";
import Loader from "../component/Loader.jsx";
import About from "../component/About.jsx";

const AboutPage = () => { 
    useEffect(()=>{
        document.title="About";         
    },[]);

    return (
        <Layout>
            {
                <About/>
            }
        </Layout>
    );
};

export default AboutPage;