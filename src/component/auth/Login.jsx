import React, {useEffect, useState} from 'react';
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {loginUser} from "../../ApiRequest/ApiRequest.js";

const Login = () => {
    const [input, setInput] = useState({});
    const [successResponse, setSuccessResponse] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [forceRender, setForceRender] = useState(false);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setSuccessResponse("");
            setErrorResponse("");
        }, 5000);
        return () => {
            clearInterval(timer);
        } 
    }, []);
    const handleChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    });
    const handleForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (Object.values(data).some(value => value.trim() !== '')) {
            try {
                const response = await loginUser(data);
                if (response.status === 200) {
                    setSuccessResponse(response.data.message);
                    const token = response.data.token;
                    localStorage.setItem('authToken', token);
                    navigate('/');
                } else {
                    console.error("Error:", response);
                }
            } catch (error) {
                setErrors(error.response.data.errors);
            }
        } else {
            setErrorResponse("Fill up the form correctly");
        }
    } 
    return (
        <div>
            <div className="h-full bg-gray-400 dark:bg-gray-900 mt-6 py-16">
                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                 style={{ backgroundImage: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")'}} />
                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <div role="alert" className={`alert ${successResponse ? 'alert-success' : 'hidden'} mb-6`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{successResponse}</span>
                                </div>
                                <div role="alert" className={`alert ${errorResponse ? 'alert-error' : 'hidden'} mb-6`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{errorResponse}</span>
                                </div>
                                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                                    Login Account
                                </h3>
                                <p className="mb-16 text-base text-center text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
                                    magni eius eaque?
                                </p>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleForm}> 
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                            Email<span className={`text-red-600 font-bold text-xl`}>*</span>
                                        </label> 
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none 
                                            focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"
                                            value={input.email} name={`email`} onChange={handleChange}
                                        />
                                        <p className={`${errors.email && errors.email.length > 0 ? 'text-red-500' : 'hidden'} mb-4`}>
                                            {errors.email && errors.email.length > 0 && errors.email[0]}
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password" >
                                            Password<span className={`text-red-600 font-bold text-xl`}>*</span>
                                        </label> 
                                        <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow
                                            appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                                            value={input.password} name={`password`} onChange={handleChange}
                                        />
                                        <p className={`${errors.password && errors.password.length > 0 ? 'text-red-500' : 'hidden'} mb-4 italic`}>
                                            {errors.password && errors.password.length > 0 && errors.password[0]}
                                        </p>
                                    </div> 
                                    <div className="mb-6 text-center">
                                        <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white 
                                            dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <NavLink to={'/registration'}>
                                            <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                                                Don't have account? Create here...!
                                            </a>
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;