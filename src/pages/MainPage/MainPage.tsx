import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Posts from "../../components/Posts/Posts";
import Filters from "../../components/Filters/Filters";
import {useNavigate} from "react-router-dom";
import DefaultButton from "../../components/DefaultButton/DefaultButton";

export default function MainPage() {
    const navigate = useNavigate();

    return (
        <div className={"container"}>
            <DefaultButton
                title={"Создать"}
                clickHandler={() => navigate("/post/new")}
            />
            <div className={"decoration_line"}/>
            <SearchInput/>
            <Filters/>
            <Posts/>
        </div>
    )
}
