import axios from "axios";
const baseUrl = "https://basic-blog.teamrabbil.com/api"
const localBaseUrl = "http://127.0.0.1:8000/api"

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

export async function sendContactMessage(listId, author, comment){
    const response = await axios.post(baseUrl + "/create-comment", {"listId": listId, "author": author, "comment": comment});
    if (response.status === 200) {
        return response.data;
    }else{
        return [];
    }
}

// Registration function
export async function registration(data) {
    const response = await axios.post(localBaseUrl + "/register", data);
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// loginUser function
export async function loginUser(data) {
    const response = await axios.post(localBaseUrl + "/login", data);
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// logout function
export async function logout(accessToken) {
    try {
        const response = await axios.get(localBaseUrl + "/logout", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        if (response.status === 200) {
            return response;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
}

// verify the token
export async function tokenVerify(accessToken) {
    try {
        const response = await axios.get(localBaseUrl + "/token-verify", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        if (response.status === 200) {
            return response;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
}
