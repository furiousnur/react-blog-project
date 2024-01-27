import React, {useEffect} from 'react';  
import Dashboard from "../../component/admin/Dashboard.jsx";
import AdminLayout from "../../layout/adminLayout.jsx"; 

const DashboardPage = () => {
    return (
        <AdminLayout>
            {
                <Dashboard/>
            }
        </AdminLayout>
    );
};

export default DashboardPage;
