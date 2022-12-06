import React from "react";
import {PostInterface} from "../../interfaces/interfaces";
import "./PostItem.css";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {deletePost} from "../../store/reducers/appSlice";
import DefaultButton from "../DefaultButton/DefaultButton";

interface PostProps {
    post: PostInterface
    position: number
}

export default function PostItem(props: PostProps){
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const openHandler = () => {
        navigate(`/post/${props.post.id}`);
    }

    const deleteHandler = () => {
        dispatch(deletePost(props.post.id));
    }

    return (
        <div className={"post_container"} onDoubleClick={() => navigate(`/post/${props.post.id}`)}>
            <div className={"post_content"}>
                <div>
                    <h3 className={"post_title"}>{props.position}. {props.post.title}</h3>
                    <span>{props.post.body}</span>
                </div>
                <div className="post_btns">
                    <div>
                        <DefaultButton title={"Открыть"} clickHandler={openHandler}/>
                    </div>
                    <div>
                        <DefaultButton
                            clickHandler={deleteHandler}
                            doubleClickHandler={(e) => e.stopPropagation()}
                            title={"Удалить"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}