import React from "react";
import "../../css/Accesories/Footer.css";
import spartanLogo from "../../svg/spartan.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={spartanLogo} alt="spartan" className="footer-img" />
      <p className="footer-copyright">Copyright © 2023 - Spartan Food</p>
    </div>
  );
};

export default Footer;
