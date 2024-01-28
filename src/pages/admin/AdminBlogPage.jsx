import React, {useEffect} from 'react'; 
import AdminLayout from "../../layout/adminLayout.jsx";
import AdminBlog from "../../component/admin/AdminBlog.jsx";

const AdminBlogPage = () => {
    useEffect(() => {
        document.title = 'Blogs';
    }, []);
    return (
        <AdminLayout>
            {
                <AdminBlog/>
            }
        </AdminLayout>
    );
};

export default AdminBlogPage;
