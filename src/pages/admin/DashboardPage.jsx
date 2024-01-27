import React, {useEffect} from 'react';  
import Dashboard from "../../component/admin/Dashboard.jsx";
import AdminLayout from "../../layout/adminLayout.jsx"; 

const DashboardPage = () => {
    useEffect(() => {
        document.title = 'Dashboard';
    }, []);
    return (
        <AdminLayout>
            {
                <Dashboard/>
            }
        </AdminLayout>
    );
};

export default DashboardPage;
