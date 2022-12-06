import React, {useEffect, useState} from "react";
import "./Filters.css";
import {useDispatch} from "react-redux";
import {changeLoaderStatus, changePosts, sortPosts} from "../../store/reducers/appSlice";
import {getPosts} from "../../requests/Requests";

const sortFilterOptions = [
    {
        value: "none",
        title: "Сортировка",
    },
    {
        value: "asc",
        title: "По возрастанию",
    },
    {
        value: "desc",
        title: "По убыванию",
    },
];
const maxItemsFilterOptions = [3, 5, 10];

export default function Filters() {
    const [sortValue, setSortValue] = useState<string>("none");
    const [maxItems, setMaxItems] = useState<number>(10);

    const dispatch = useDispatch();

    const sortInputHandler = (value: string) => {
        setSortValue(value);
    }

    const maxItemsInputHandler = (value: number) => {
        setMaxItems(value);
    }

    useEffect(() => {
        dispatch(sortPosts(sortValue));
    }, [sortValue]);

    useEffect(() => {
        dispatch(changeLoaderStatus(true));
        getPosts(maxItems).then(result => {
            if (result.type === "success") {
                setSortValue("none");
                dispatch(changePosts(result.data));
            } else {
                console.log("Error: ", result.data);
            }
        }).finally(() => {
            dispatch(changeLoaderStatus(false));
        })
    }, [maxItems]);

    return (
        <div>
            <div>
                <select
                    value={sortValue}
                    onChange={(e) => sortInputHandler(e.target.value)}
                    className={"select_filter"}
                >
                    {sortFilterOptions.map((option, index) => (
                        <option
                            key={index}
                            value={option.value}
                        >
                            {option.title}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <select
                    className={"select_filter max_items_filter"}
                    value={maxItems}
                    onChange={(e) => maxItemsInputHandler(+e.target.value)}
                >
                    {maxItemsFilterOptions.map((option, index) => (
                        <option
                            key={index}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}