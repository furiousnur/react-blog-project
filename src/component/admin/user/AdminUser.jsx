import {NavLink} from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminUser = (props) => {
    const diffToast = () => {
        toast('Wow so easy');
    }
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
                <h2 className="mb-4 text-xl font-bold md:mb-0 text-gray-700">
                    List of User
                </h2>
                <button className="btn btn-outline btn-accent">
                    <NavLink to={'/admin/blog/add'}>Add User</NavLink>
                </button>
            </div>
            <div className="mt-3 rounded shadow bg-stone-100 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
                    <h2 className="mb-4 text-xl font-bold md:mb-0">
                        List of User
                    </h2>
                    <div className="flex px-6 py-2 mb-4 border border-gray-600 rounded-md md:mb-0 dark:border-gray-400 mt-4">
                        <input type="text"
                               className="w-full pr-4 text-sm text-gray-700 bg-stone-100 dark:text-gray-400 dark:bg-gray-900 placeholder-text-100 "
                               placeholder="search..."
                        />
                        <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-300 hover:text-blue-600">
                            <span className="mr-2 text-xs ">Go</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                        <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
                            <th className="px-6 pb-3 font-medium ">First Name</th>
                            <th className="px-6 pb-3 font-medium ">Last Name</th>
                            <th className="px-6 pb-3 font-medium ">Full Name</th>
                            <th className="px-6 pb-3 font-medium ">Email</th> 
                            <th className="px-6 pb-3 font-medium">Status</th>
                            <th className="px-6 pb-3 font-medium">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {<>
                            {Array.isArray(props.list) ? (
                                props.list.map((item, index) => (
                                    <tr key={index} className="text-sm bg-white dark:text-gray-400 dark:bg-gray-800">
                                        <td className="px-6 py-5 font-medium">{item.first_name}</td> 
                                        <td className="px-6 py-5 font-medium">{item.last_name}</td> 
                                        <td className="px-6 py-5 font-medium">{item.first_name} {item.last_name}</td> 
                                        <td className="px-6 py-5 font-medium">{item.email}</td>  
                                        <td className="px-6 py-5 font-medium">
                                            <span className="text-blue-400 dark:text-blue-300">{item.status}</span>
                                        </td>
                                        <td className="flex items-center px-6 py-5 ">
                                            <button className="btn btn-outline btn-info">
                                                <NavLink to={`/admin/blog/edit/${item.id}`}>Edit</NavLink>
                                            </button>
                                            <button className="ml-2 btn btn-outline btn-error">
                                                <NavLink to={`/admin/blog/delete/${item.id}`} onChange={diffToast}>Delete</NavLink>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                // Render a loading message
                                <tr>
                                    <td colSpan="5">Loading...</td>
                                </tr>
                            )}
                        </>}
                        </tbody>
                    </table>
                    <div className="flex justify-end pt-4 mt-4 border-t dark:border-gray-700">
                        <nav aria-label="page-navigation">
                            <ul className="flex list-style-none">
                                <li className="page-item disabled ">
                                    <a
                                        href="src/component/admin/blog/AdminBlog.jsx#"
                                        className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-blue-600"
                                    >
                                        Previous
                                    </a>
                                </li>
                                <li className="page-item ">
                                    <a
                                        href="src/component/admin/blog/AdminBlog.jsx#"
                                        className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-blue-600"
                                    >
                                        1
                                    </a>
                                </li>
                                <li className="page-item ">
                                    <a
                                        href="src/component/admin/blog/AdminBlog.jsx#"
                                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3  "
                                    >
                                        2
                                    </a>
                                </li>
                                <li className="page-item ">
                                    <a
                                        href="src/component/admin/blog/AdminBlog.jsx#"
                                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 rounded-md mr-3 "
                                    >
                                        3
                                    </a>
                                </li>
                                <li className="page-item ">
                                    <a href="src/component/admin/blog/AdminBlog.jsx#" className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 dark:text-gray-400 dark:hover:bg-gray-700
                                         hover:bg-blue-100 rounded-md ">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AdminUser;
