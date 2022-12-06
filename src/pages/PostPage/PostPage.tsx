import React, {useEffect, useState} from "react";
import {getCommentsByPostId} from "../../requests/Requests";
import {CommentInterface} from "../../interfaces/interfaces";
import Comment from "../../components/Comment/Comment";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {changeLoaderStatus} from "../../store/reducers/appSlice";
import BackBtn from "../../components/BackBtn/BackBtn";
import {useParams} from "react-router-dom";

export default function PostPage() {
    const [comments, setComments] = useState<CommentInterface[] | []>([]);

    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.appReducer.loading);
    const params: any = useParams();

    useEffect(() => {
        dispatch(changeLoaderStatus(true));
        getCommentsByPostId(params.id).then(result => {
            if (result.type === "success") {
                setComments(result.data);
            } else {
                console.log("Error: ", result.data);
            }
        }).finally(() => {
            dispatch(changeLoaderStatus(false));
        })
    }, []);

    return (
        <div className={"container"}>
            <h2 className={"title"}>Комментарии</h2>
            <BackBtn/>
            {loading ? <div>Идет загрузка...</div> :
                (comments.length ? comments.map((comment, index) => (
                    <Comment comment={comment} key={index}/>
                )) : <div>Комментариев нет</div>)
            }
            <BackBtn/>
        </div>
    )
}