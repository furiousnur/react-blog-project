import React, { useState } from "react";

const AdminLayout = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`bg-gray-800 text-white w-64 ${
                    isSidebarOpen ? "" : "hidden md:block"
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
            <div
                className={`flex-1 flex flex-col overflow-hidden ${
                    isSidebarOpen ? "scrollbar-thin overflow-y-scroll" : ""
                }`}
            >
                {/* Navbar */}
                <nav className="bg-gray-800 p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none md:hidden"
                    >
                        {isSidebarOpen ? "Close" : "Open"} Menu
                    </button>
                    <h1 className="text-2xl font-bold text-white hidden md:block">
                        Admin Dashboard
                    </h1>
                </nav>
                <div className="p-4 md:p-8">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
