import {useNavigate, NavLink} from "react-router-dom";
import {updateBlog, updateUser} from "../../../ApiRequest/ApiRequest.js";
import {useState, useEffect} from "react"; 

const AdminEditBlog = (props) => {
    const [input, setInput] = useState({});
    const [successResponse, setSuccessResponse] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        setInput(props.list)
    }, [props]);
    
    const handleChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleUserForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (Object.values(data).some(value => value.trim() !== '')) {
            try {
                const response = await updateUser(data, props.list.id); 
                if (response.status === 200) {
                    setErrors({});
                    setErrorResponse("");
                    return navigate('/admin/users');
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
            <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
                <h2 className="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">
                    Edit User
                </h2>
                <button className="btn btn-outline btn-accent hover:border-red-900">
                    <NavLink to={'/admin/users'}>List of User</NavLink>
                </button>
            </div>
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
            <div className="mt-3 px-4 py-4 bg-white border shadow-sm dark:border-gray-900 dark:bg-gray-900 lg:py-4 md:px-6"> 
                <form action="src/component/admin/blog/AdminEditBlog.jsx#" className="" onSubmit={handleUserForm}>
                    <div className="mb-6">
                        <label htmlFor="" className="block mb-2 text-sm font-medium dark:text-gray-400" >
                            First Name
                        </label>
                        <input type="text" className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400
                            dark:border-gray-800  dark:bg-gray-800" placeholder="First Name...." value={input.first_name} name={`first_name`} onChange={handleChange} />
                        {/*<p className={`${errors.first_name && errors.first_name.length > 0 ? 'text-red-500' : 'hidden'}`}>
                            {errors.first_name && errors.first_name.length > 0 && errors.first_name[0]}
                        </p>*/}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="" className="block mb-2 text-sm font-medium dark:text-gray-400" >
                            Last Name
                        </label>
                        <input type="text" className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400
                            dark:border-gray-800  dark:bg-gray-800" placeholder="Last Name...." value={input.last_name} name={`last_name`} onChange={handleChange} />
                        {/*<p className={`${errors.last_name && errors.last_name.length > 0 ? 'text-red-500' : 'hidden'}`}>
                            {errors.last_name && errors.last_name.length > 0 && errors.last_name[0]}
                        </p>*/}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="" className="block mb-2 text-sm font-medium dark:text-gray-400" >
                            Email
                        </label>
                        <input type="text" className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded dark:placeholder-gray-400 dark:text-gray-400
                            dark:border-gray-800  dark:bg-gray-800" readOnly placeholder="Email...." value={input.email} name={`email`} onChange={handleChange} />
                        {/*<p className={`${errors.email && errors.email.length > 0 ? 'text-red-500' : 'hidden'}`}>
                            {errors.email && errors.email.length > 0 && errors.email[0]}
                        </p>*/}
                    </div> 
                    <div className="relative">
                        <select className="block w-full px-4 py-3 mb-2 text-sm text-gray-500 placeholder-gray-400 bg-gray-100 border rounded appearance-none 
                            dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800" value={input.status} name={`status`} onChange={handleChange}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option> 
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16}
                                 fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </div>
                        {/*<p className={`${errors.status && errors.status.length > 0 ? 'text-red-500' : 'hidden'}`}>
                            {errors.status && errors.status.length > 0 && errors.status[0]}
                        </p>*/}
                    </div> 
                    <div className="mb-6 ">
                        <label htmlFor="" className="block mb-2 text-sm font-medium dark:text-gray-400" >
                            Image
                        </label>
                        <div className="py-2 shrink-0">
                            <img
                                src="https://i.postimg.cc/rF6G0Dh9/pexels-emmy-e-2381069.jpg"
                                alt=""
                                className="object-cover rounded-full w-11 h-11"
                            />
                        </div>
                        <label htmlFor="" className="block pt-2">
                            <input type="file" className="block w-full text-sm text-slate-500 " />
                        </label>
                    </div>
                    <button type={`submit`} className="px-4 py-2 text-base text-gray-100 bg-blue-600 rounded hover:bg-blue-500">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminEditBlog;
