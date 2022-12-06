import React, {useEffect} from "react";
import PostItem from "../PostItem/PostItem";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {changeLoaderStatus, changePosts} from "../../store/reducers/appSlice";
import {getPosts} from "../../requests/Requests";

export default function Posts() {
    const posts = useAppSelector(state => state.appReducer.posts);
    const loading = useAppSelector(state => state.appReducer.loading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(changeLoaderStatus(true));
        getPosts().then(result => {
            if (result.type === "success") {
                dispatch(changePosts(result.data));
            } else {
                console.log("Error: ", result.data);
            }
        }).finally(() => {
            dispatch(changeLoaderStatus(false));
        })
    }, []);

    return (
        <>
            <h1 className={"title"}>Посты про JS</h1>

            {loading ? <div>Идет загрузка...</div> :
                (posts.length ? posts.map((post, index) => (
                    <PostItem post={post} key={index} position={index + 1}/>
                )) : <div>Постов нет</div>)
            }
        </>
    )
}