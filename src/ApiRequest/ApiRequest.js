import axios from "axios";
const baseUrl = "https://basic-blog.teamrabbil.com/api"

export async function postCategories(){
    const response = await axios.get(`${baseUrl}/post-categories`);
    if (response.status === 200) {
        return response.data;
    }else{
        return [];
    }
}

export async function postNewest(){
    const response = await axios.get(`${baseUrl}/post-newest`);
    if (response.status === 200) {
        return response.data;
    }else{
        return [];
    }
}

export async function postList(id){
    const response = await axios.get(`${baseUrl}/post-list/${id}`);
    if (response.status === 200) {
        return response.data;
    }else{
        return [];
    }
}

export async function postDetails(id){
    const response = await axios.get(`${baseUrl}/post-details/${id}`);
    if (response.status === 200) {
        return response.data;
    }else{
        return [];
    }
}

export async function createComment(listId, author, comment){
    const response = await axios.post(baseUrl + "/create-comment", {"listId": listId, "author": author, "comment": comment});
    if (response.status === 200) {
        return response.data;
    }else{
        return [];
    }
}