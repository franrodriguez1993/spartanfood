import React from "react";
import MenuCard from "../components/MenuRoute/MenuCard";
import "../css/MenuRoute/MenuRoute.css";
import menus from "../json/food.json";

const MenuRoute = () => {
  return (
    <div className="menuroute-container">
      <h1 className="menuroute-title"> Menu</h1>

      <section className="menuroute-container_cards">
        {menus.food.map((m, index) => (
          <MenuCard key={index} menu={m} />
        ))}
      </section>
    </div>
  );
};

export default MenuRoute;
