import React from "react";

interface DefaultButtonProps {
    title: string
    clickHandler(e?: any): void
    doubleClickHandler?(e: any): void
    disabled?: boolean
}

export default function DefaultButton(props: DefaultButtonProps) {
    return (
        <button
            className={"base_styled_btn"}
            onClick={props.clickHandler}
            onDoubleClick={props.doubleClickHandler}
            disabled={props.disabled}
        >
            {props.title}
        </button>
    )
}