import React, {useEffect, useState} from "react"; 
import ProfilePic from "./profilePic.jsx";
import {NavLink} from "react-router-dom";

const AdminLayout = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const authToken = localStorage.getItem('authToken');
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    useEffect(() => { 
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString()); 
        }, 1000);

        //cleanup function
        return () => {
            clearInterval(timer);
        } 
    }, []); 
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`bg-gray-800 text-white w-64 ${
                    isSidebarOpen ? "" : "hidden md:block"
                }`}
            >
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Admin</h1>
                </div>
                <nav>
                    <ul className="py-4">
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                            <NavLink to={'/dashboard'}>Dashboard</NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                            <NavLink to={'/admin/blogs'}>Blogs</NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                            <NavLink to={'/admin/users'}>Users</NavLink>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                            <a href="/orders">Orders</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                            <a href="/products">Products</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 flex flex-col scrollbar-thin overflow-y-scroll overflow-x-scroll`} >
                {/* Navbar */} 
                <nav className="bg-gray-800 p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <button
                            onClick={toggleSidebar}
                            className="text-white focus:outline-none md:hidden"
                        >
                            {isSidebarOpen ? "Close" : "Open"} Menu
                        </button>
                        <h1 className="text-2xl font-bold text-white hidden md:block ml-4">
                            {time}
                        </h1>
                    </div>
                    {authToken ? (
                        <ProfilePic />
                    ) : null}
                </nav>

                <div className="p-2 md:p-2">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
