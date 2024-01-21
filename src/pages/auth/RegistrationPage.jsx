import React, {useEffect} from 'react';
import Layout from "../../layout/layout.jsx"; 
import Registration from "../../component/auth/Registration.jsx";

const RegistrationPage = () => {
    useEffect(()=>{
        document.title="Registration";
    },[]);

    return (
        <Layout>
            {
                <Registration/>
            }
        </Layout>
    );
};

export default RegistrationPage;