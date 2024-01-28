import React, {useEffect} from 'react'; 
import AdminLayout from "../../layout/adminLayout.jsx"; 
import AdminAddBlog from "../../component/admin/AdminAddBlog";

const AdminAddBlogPage = () => {
    useEffect(() => {
        document.title = 'Add Blog';
    }, []);
    return (
        <AdminLayout>
            {
                <AdminAddBlog/>
            }
        </AdminLayout>
    );
};

export default AdminAddBlogPage;
