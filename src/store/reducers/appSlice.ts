import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appState} from "../appState";
import {PostInterface} from "../../interfaces/interfaces";

export const appSlice = createSlice({
    name: "app",
    initialState: appState,
    reducers: {
        changeLoaderStatus(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        changePosts(state, action: PayloadAction<PostInterface[]>) {
            state.posts = action.payload;
        },
        deletePost(state, action: PayloadAction<number>) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        sortPosts(state, action: PayloadAction<string>) {
            if (action.payload === "desc") {
                state.posts = state.posts.sort((a, b) => {
                    if (a.id > b.id) {
                        return -1;
                    }
                    if (a.id < b.id) {
                        return 1;
                    }
                    return 0;
                })
            } else if (action.payload === "asc") {
                state.posts = state.posts.sort((a, b) => {
                    if (a.id > b.id) {
                        return 1;
                    }
                    if (a.id < b.id) {
                        return -1;
                    }
                    return 0;
                })
            }
        },
        addNewPost(state, action: PayloadAction<any>) { // TODO: add interface
            state.posts[state.posts.length] = action.payload;
        }
    }
})

export const {
    changeLoaderStatus,
    changePosts,
    deletePost,
    sortPosts,
    addNewPost,
} = appSlice.actions;
export default appSlice.reducer;