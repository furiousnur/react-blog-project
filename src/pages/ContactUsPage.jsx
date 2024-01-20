import React, {useEffect, useState} from 'react';
import Layout from "../layout/layout.jsx";
import Loader from "../component/Loader.jsx"; 
import Contact from "../component/ContactUs";

const ContactPage = () => {
    useEffect(()=>{
        document.title="Contact Us";
    },[]);

    return (
        <Layout>
            {
                <Contact/>
            }
        </Layout>
    );
};

export default ContactPage;