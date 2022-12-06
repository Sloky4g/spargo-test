import React, {useEffect, useState} from "react";
import "./SearchInput.css";
import {useAppDispatch} from "../../hooks/redux";
import {getPostById, getPosts} from "../../requests/Requests";
import {changeLoaderStatus, changePosts} from "../../store/reducers/appSlice";

export default function SearchInput() {
    const [searchValue, setSearchValue] = useState<string>("");

    const dispatch = useAppDispatch();

    const inputHandler = (value: string) => {
        if (!isNaN(+value)) {
            setSearchValue(value);
        }
    }

    useEffect(() => {
        if (searchValue) {
            dispatch(changeLoaderStatus(true));
            getPostById(+searchValue).then(result => {
                if (result.type === "success") {
                    dispatch(changePosts([result.data]));
                } else {
                    console.log("Error: ", result.data);
                    dispatch(changePosts([]));
                }
            }).finally(() => {
                dispatch(changeLoaderStatus(false));
            })
        } else {
            getPosts().then(result => {
                if (result.type === "success") {
                    dispatch(changePosts(result.data));
                } else {
                    console.log("Error: ", result.data);
                }
            }).finally(() => {
                dispatch(changeLoaderStatus(false));
            })
        }
    }, [searchValue]);

    return (
        <div className={"search_input_container"}>
            <input
                className={"search_input"}
                name={"search"}
                value={searchValue}
                onChange={(e) => inputHandler(e.target.value)}
                placeholder={"Поиск..."}
            />
        </div>
    )
}