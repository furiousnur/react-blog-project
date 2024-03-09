import React, {useEffect, useState} from 'react';
import AdminLayout from "../../../layout/adminLayout.jsx";
import AdminUser from "../../../component/admin/user/AdminUser.jsx";
import {userList} from "../../../ApiRequest/ApiRequest.js";
import Loader from "../../../component/Loader.jsx";

const AdminUsersPage = () => {
    const [list,setList]=useState(null);
    useEffect(() => {
        document.title = 'Blogs';
        (async ()=>{
            let res= await userList();
            setList(res.data.users)
        })()
    }, []);
    return (
        <AdminLayout>
            {
                list===null ? <Loader/>:<AdminUser list={list}/>
            }
        </AdminLayout>
    );
};

export default AdminUsersPage;
