import React, {useEffect} from 'react';
import Layout from "../../layout/layout.jsx";
import Login from "../../component/auth/Login.jsx";

const LoginPage = () => {
    useEffect(()=>{
        document.title="Login";
    },[]);

    return (
        <Layout>
            {
                <Login/>
            }
        </Layout>
    );
};

export default LoginPage;