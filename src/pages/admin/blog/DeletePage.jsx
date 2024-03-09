import React, { useEffect } from 'react';
import { deleteBlog } from "../../../ApiRequest/ApiRequest.js";
import Loader from "../../../component/Loader.jsx";
import { useNavigate, useParams } from "react-router-dom";

const DeletePage = () => {
    let { id } = useParams();
    const navigate = useNavigate(); 
    useEffect(() => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (confirmDelete) {
            (async () => {
                try {
                    let res = await deleteBlog(id);
                    if (res.status === 200) {
                        navigate('/admin/blogs');
                    } else {
                        alert('Something went wrong');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Something went wrong');
                }
            })();
        } else { 
            navigate('/admin/blogs');
        }
    }, [id, navigate]);
    return (
        <Loader />
    );
};

export default DeletePage;
