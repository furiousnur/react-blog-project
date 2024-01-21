import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage.jsx";
import RegistrationPage from "./pages/auth/RegistrationPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/blogs" element={<BlogPage/>}/>
                    <Route path="/byCategory/:id" element={<ByCategoryPage/>}/>
                    <Route path="/details/:id" element={<DetailsPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contact-us" element={<ContactPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;