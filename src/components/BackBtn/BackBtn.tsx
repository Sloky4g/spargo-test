import React from "react";
import "./BackBtn.css";
import {useNavigate} from "react-router-dom";

export default function BackBtn() {
    const navigate = useNavigate();

    return (
        <button
            className={"base_styled_btn back_btn"}
            onClick={() => navigate(-1)}
        >
            Назад
        </button>
    )
}