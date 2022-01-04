import React, { useState } from "react";
import "./Style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
    ...new Set(
        Menu.map((curElem,id) => {
            <div key={id} />
            return (curElem.category);
        })
    ),"All",
];
const Food = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueList);

    const filterItem = (category) => {
        if(category==="All"){
            setMenuData(Menu)
            return
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Food;
