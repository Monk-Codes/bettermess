import React, { useState } from "react";
import "./Style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";

const Food = () => {
  const [menuData, setMenuData] = useState(Menu);
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item">Breakfast</button>
          <button className="btn-group__item">Lunch</button>
          <button className="btn-group__item">Dinner</button>
          <button className="btn-group__item">Night-Cravings</button>
          <button className="btn-group__item">All</button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Food;
