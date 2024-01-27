import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { tokenVerify } from './ApiRequest/ApiRequest.js';
import HomePage from './pages/HomePage.jsx';
import ByCategoryPage from './pages/ByCategoryPage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactUsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import RegistrationPage from './pages/auth/RegistrationPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import DashboardPage from './pages/admin/DashboardPage.jsx';
import Logout from './pages/auth/Logout.jsx';
import Error from "./component/Error.jsx";

const App = () => { 
    const [tokenValid, setTokenValid] = useState(false);
    const authToken = localStorage.getItem('authToken');
    
    useEffect(() => {
        const verifyToken = async () => {
            try {
                if (authToken) {
                    const response = await tokenVerify(authToken);
                    if (response.status === 200) {
                        setTokenValid(true);
                    } else { 
                        localStorage.removeItem('authToken');
                        setTokenValid(false);
                    }
                }/* else { 
                    return <Navigate to="/login" />;
                }*/
            } catch (error) { 
                return <Navigate to="/login" />;
            }
        };

        verifyToken();
    }, [authToken]); 

    return (
        <div>
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blogs" element={<BlogPage />} />
                    <Route path="/byCategory/:id" element={<ByCategoryPage />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact-us" element={<ContactPage />} />
                    {tokenValid ? (
                        <>
                            <Route path="/dashboard" element={<DashboardPage />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/login" element={<Navigate to="/" />} />
                            <Route path="/registration" element={<Navigate to="/" />} />
                        </>
                    ) :
                        <Route path="/*" element={<Error />} />
                    }
                    {
                        !authToken ? (
                            <>
                                <Route path="/registration" element={<RegistrationPage />} />
                                <Route path="/login" element={<LoginPage />} />
                            </>
                        ) :
                        <Route path="/*" element={<Error />} />
                    }
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
