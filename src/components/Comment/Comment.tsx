import React from "react";
import "./Comment.css";
import {CommentInterface} from "../../interfaces/interfaces";

interface CommentProps {
    comment: CommentInterface
}

export default function Comment(props: CommentProps) {
    return (
        <div className={"comment_container"}>
            <h3 className={"comment_title"}>{props.comment.name}</h3>
            <span className={"comment_author"}>
                Автор: {props.comment.email}
            </span>
            <span className={"comment_text"}>
                {props.comment.body}
            </span>
        </div>
    )
}