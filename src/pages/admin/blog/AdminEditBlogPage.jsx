import React, {useEffect, useState} from 'react'; 
import AdminLayout from "../../../layout/adminLayout.jsx";  
import AdminEditBlog from "../../../component/admin/blog/AdminEditBlog.jsx";
import {editBlog} from "../../../ApiRequest/ApiRequest.js";
import {useParams} from "react-router-dom";
import Loader from "../../../component/Loader.jsx"; 

const AdminEditBlogPage = () => {
    let {id}=useParams();
    const [list,setList]=useState(null);
    useEffect(()=>{
        document.title="Edit Blog"; 
        (async () => {
            let res= await editBlog(id);
            setList(res.data.blog)
        })()
    },[id])
    return (
        <AdminLayout>
            { 
                list===null ? <Loader/>:<AdminEditBlog list={list}/>
            }
        </AdminLayout>
    );
};

export default AdminEditBlogPage;
