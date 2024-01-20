import React, {useEffect, useState} from 'react';
import BlogList from "../component/BlogList.jsx";
import Layout from "../layout/layout.jsx";
import {postNewest} from "../ApiRequest/ApiRequest.js";
import Loader from "../component/Loader.jsx";
const BlogPage = () => {
    const [list,setList]=useState(null);
    useEffect(()=>{
        document.title="Blogs";
        (async ()=>{
            let res= await postNewest();
            setList(res)
        })()
    },[])

    return (
        <Layout>
            {
                list===null ? <Loader/>:<BlogList list={list}/>
            }
        </Layout>
    );
};
export default BlogPage;