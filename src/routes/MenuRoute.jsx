import React, { useEffect } from "react";
import MenuCard from "../components/MenuRoute/MenuCard";
import "../css/MenuRoute/MenuRoute.css";
import menus from "../json/food.json";

const MenuRoute = () => {
  useEffect(() => {
    window.onscroll = function () {
      fadeIn();
    };

    function fadeIn() {
      let card = document.querySelector(".menuroute-container_cards");
      let distance_card = window.innerHeight - card.getBoundingClientRect().top;
      if (distance_card >= 200) {
        card.classList.add("menu-fadeIn-effect");
      }
    }
  }, []);
  return (
    <div className="menuroute-container">
      <h1 className="menuroute-title"> Menu</h1>

      <section className="menuroute-container_cards">
        {menus.food.map((m, index) => (
          <div className="menu-fadeIn" key={index}>
            <MenuCard menu={m} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenuRoute;
