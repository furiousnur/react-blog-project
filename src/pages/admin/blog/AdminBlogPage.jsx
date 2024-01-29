import React, {useEffect, useState} from 'react'; 
import AdminLayout from "../../../layout/adminLayout.jsx";
import AdminBlog from "../../../component/admin/blog/AdminBlog.jsx";
import {blogList} from "../../../ApiRequest/ApiRequest.js"; 
import Loader from "../../../component/Loader.jsx"; 

const AdminBlogPage = () => {
    const [list,setList]=useState(null);
    useEffect(() => {
        document.title = 'Blogs';
        (async ()=>{
            let res= await blogList();
            setList(res.data.blogs)
        })()
    }, []);
    return (
        <AdminLayout>
            { 
                list===null ? <Loader/>:<AdminBlog list={list}/>
            }
        </AdminLayout>
    );
};

export default AdminBlogPage;
