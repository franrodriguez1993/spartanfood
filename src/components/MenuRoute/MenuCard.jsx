import React from "react";

const MenuCard = ({ menu }) => {
  return (
    <div className="cardMenu">
      <div>
        <img src={menu.image} alt="menu-card-img" className="cardMenu-img" />
      </div>
      <div className="cardMenu-presentation">
        <h4 className="cardMenu-presentation_title">{menu.title}</h4>
        <p className="cardMenu-presentation_price">
          <b>Price: $</b>
          {menu.price}
        </p>
      </div>
      <div className="menu-description">
        <p className="menu-description_p">{menu.description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
