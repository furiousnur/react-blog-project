import React, {useEffect, useState} from 'react'; 
import {deleteBlog} from "../../ApiRequest/ApiRequest.js";
import Loader from "../../component/Loader.jsx"; 
import {useNavigate, useParams} from "react-router-dom";

const DeletePage = () => { 
    let {id}=useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        (async () => {
            let res = await deleteBlog(id);
            if (res.status === 200) { 
                navigate('/admin/blogs');
            } else {
                alert('Something went wrong');
            }
        })()
    }, []);
    return (
        <Loader/>
    );
};

export default DeletePage;
