import React, {useEffect, useState} from 'react'; 
import AdminLayout from "../../../layout/adminLayout.jsx";   
import {editUser} from "../../../ApiRequest/ApiRequest.js";
import {useParams} from "react-router-dom";
import Loader from "../../../component/Loader.jsx";
import AdminEditUser from "../../../component/admin/user/AdminEditUser"; 

const AdminEditUserPage = () => {
    let {id}=useParams();
    const [list,setList]=useState(null);
    useEffect(()=>{
        document.title="Edit User"; 
        (async () => {
            let res= await editUser(id);
            setList(res.data.user)
        })()
    },[id])
    return (
        <AdminLayout>
            { 
                list===null ? <Loader/>:<AdminEditUser list={list}/>
            }
        </AdminLayout>
    );
};

export default AdminEditUserPage;
