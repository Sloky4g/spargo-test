import React, {useState} from "react";
import "./NewPostPage.css";
import BackBtn from "../../components/BackBtn/BackBtn";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addNewPost} from "../../store/reducers/appSlice";
import {useNavigate} from "react-router-dom";
import DefaultButton from "../../components/DefaultButton/DefaultButton";

export default function NewPostPage() {
    const [titleInputValue, setTitleInputValue] = useState<string>("");
    const [bodyInputValue, setBodyInputValue] = useState<string>("");

    const userId = useAppSelector(state => state.appReducer.userId);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const titleInputHandler = (value: string) => {
        setTitleInputValue(value);
    }

    const bodyInputHandler = (value: string) => {
        setBodyInputValue(value);
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        if (titleInputValue && bodyInputValue) {
            const newData = {
                userId: userId,
                title: titleInputValue,
                body: bodyInputValue,
                id: Date.now()
            }
            const localStoragePosts = localStorage.getItem("posts");
            if (localStoragePosts) {
                const newPosts = JSON.parse(localStoragePosts);
                newPosts.push(newData);
                localStorage.setItem("posts", JSON.stringify(newPosts));
            } else {
                localStorage.setItem("posts", JSON.stringify([newData]));
            }
            dispatch(addNewPost({
                userId: userId,
                title: titleInputValue,
                body: bodyInputValue,
                id: Date.now()
            }));
            navigate("/");
        }
    }

    return (
        <div className={"container"}>
            <BackBtn/>
            <h2 className={"title"}>Создать пост</h2>
            <form className={"new_post_form"}>
                <input
                    className={"new_post_input"}
                    name={"title"}
                    value={titleInputValue}
                    onChange={(e) => titleInputHandler(e.target.value)}
                    placeholder={"Введите название поста"}
                />
                <textarea
                    className={"new_post_input"}
                    name={"body"}
                    value={bodyInputValue}
                    onChange={(e) => bodyInputHandler(e.target.value)}
                    placeholder={"Введите текст поста"}
                />
                <DefaultButton
                    title={"Создать"}
                    clickHandler={(e) => submitHandler(e)}
                    disabled={!titleInputValue || !bodyInputValue}
                />
            </form>
            <BackBtn/>
        </div>
    )
}