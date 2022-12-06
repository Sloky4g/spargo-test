import axios from "axios";

export async function getPosts(limit = 10, page = 1) {
    const response = axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            _limit: limit,
            _page: page
        }
    }).then(result => {
            return {
                type: "success",
                data: result.data,
            };
        },
        error => {
            return {
                type: "error",
                data: error.response.data,
            };
        });
    return await response;
}

export async function getPostById(id: number) {
    const response = axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(result => {
            return {
                type: "success",
                data: result.data,
            };
        },
        error => {
            return {
                type: "error",
                data: error.response.data,
            };
        });
    return await response;
}

export async function getCommentsByPostId(id: number) {
    const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(result => {
                return {
                    type: "success",
                    data: result.data,
                };
            },
            error => {
                return {
                    type: "error",
                    data: error.response.data,
                };
            });
    return await response;
}