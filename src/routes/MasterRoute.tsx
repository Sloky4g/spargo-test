import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import PostPage from "../pages/PostPage/PostPage";
import Error_404 from "../pages/ErrorPage/Error_404";
import NewPostPage from "../pages/NewPostPage/NewPostPage";

export default function MasterRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/post/new"} element={<NewPostPage/>}/>
                <Route path={"/post/:id"} element={<PostPage/>}/>
                <Route path={"*"} element={<Error_404/>}/>
            </Routes>
        </BrowserRouter>
    )
}