import React, { useEffect } from 'react';
import {approveRejectUser} from "../../../ApiRequest/ApiRequest.js";
import Loader from "../../../component/Loader.jsx";
import { useNavigate, useParams } from "react-router-dom";

const ApproveRejectUser = () => {
    let { action, id } = useParams();
    const navigate = useNavigate(); 
    useEffect(() => {
        const confirmAction = window.confirm("Are you sure?");
        if (confirmAction) {
            (async () => {
                try {
                    let res = await approveRejectUser(action,id);
                    if (res.status === 200) {
                        navigate('/admin/users');
                    } else {
                        alert('Something went wrong');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Something went wrong');
                }
            })();
        } else { 
            navigate('/admin/users');
        }
    }, [id, navigate]);
    return (
        <Loader />
    );
};

export default ApproveRejectUser;
