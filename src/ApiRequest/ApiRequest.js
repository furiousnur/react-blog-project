import axios from "axios";
const baseUrl = "https://basic-blog.teamrabbil.com/api"
const localBaseUrl = "http://127.0.0.1:8000/api"
const accessToken = localStorage.getItem('authToken');

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
    try {
        return await axios.post(localBaseUrl + "/login", data); 
    } catch (error) { 
        return error.response;
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

// Add Blog function
export async function addBlog(data) {
    const response = await axios.post(localBaseUrl + "/blogs", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// List of Blog Function
export async function blogList(data) {
    const response = await axios.get(localBaseUrl + "/blogs", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// Edit Blog Function
export async function editBlog(id) { 
    const response = await axios.get(`${localBaseUrl}/blogs/${id}/edit`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}
// Update Blog Function
export async function updateBlog(data, id) { 
    const response = await axios.put(`${localBaseUrl}/blogs/${id}`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// Delete Blog Function
export async function deleteBlog(id) { 
    const response = await axios.delete(`${localBaseUrl}/blogs/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// List of User Function
export async function userList(data) {
    const response = await axios.get(localBaseUrl + "/users", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// Edit User Function
export async function editUser(id) {
    const response = await axios.get(`${localBaseUrl}/users/${id}/edit`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// Update User Function
export async function updateUser(data, id) {
    const response = await axios.put(`${localBaseUrl}/users/${id}`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// Approve or Reject User Function
export async function approveRejectUser(action, id) { 
    const response = await axios.get(`${localBaseUrl}/user/approve-reject/${action}/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}

// Delete User Function
export async function deleteUser(id) {
    const response = await axios.delete(`${localBaseUrl}/users/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (response.status === 200) {
        return response;
    }else{
        return [];
    }
}