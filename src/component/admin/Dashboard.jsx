// Dashboard.jsx

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        // Add event listener to handle scrolling when sidebar opens/closes
        const handleScroll = () => {
            if (isSidebarOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        };

        // Cleanup event listener on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`bg-gray-800 text-white w-64 ${
                    isSidebarOpen ? '' : 'hidden md:block'
                }`}
            >
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </div>
                <nav>
                    <ul className="py-4">
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                            <a href="/users">Users</a>
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
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <nav className="bg-gray-800 p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none md:hidden"
                    >
                        {isSidebarOpen ? 'Close' : 'Open'} Menu
                    </button>
                    <h1 className="text-2xl font-bold text-white hidden md:block">
                        Admin Dashboard
                    </h1>
                </nav>

                {/* Page Content */}
                <div
                    className={`flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8 ${
                        isSidebarOpen ? 'scrollbar-thin overflow-y-scroll' : ''
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-2 md:mb-4">Total Users</h2>
                            <p className="text-2xl md:text-3xl font-bold">500</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-2 md:mb-4">Revenue</h2>
                            <p className="text-2xl md:text-3xl font-bold">$10,000</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-2 md:mb-4">Orders</h2>
                            <p className="text-2xl md:text-3xl font-bold">200</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-4 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-2 md:mb-4">Products</h2>
                            <p className="text-2xl md:text-3xl font-bold">50</p>
                        </div>
                    </div>

                    {/* Additional content or charts can be added here */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
