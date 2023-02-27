import React from "react";
import "../css/ContactRoute/ContactRoute.css";
import ig from "../svg/ig.svg";
import mail from "../svg/mail.svg";
import phone from "../svg/phone.svg";
import twitter from "../svg/twitter.svg";

const ContactRoute = () => {
  return (
    <div className="div-container-contact">
      <h1 className="contactus-title">Contact us</h1>
      <div className="container-contact">
        <div className="contact-card">
          <img src={ig} className="contact-card_svg" />
          <p className="contact-card_text">@spartanfood</p>
        </div>
        <div className="contact-card">
          <img src={mail} className="contact-card_svg" />
          <p className="contact-card_text">spartanfood@gmail.com</p>
        </div>
        <div className="contact-card">
          <img src={phone} className="contact-card_svg" />
          <p className="contact-card_text">123456654321</p>
        </div>
        <div className="contact-card">
          <img src={twitter} className="contact-card_svg" />
          <p className="contact-card_text">@spartanfood</p>
        </div>
      </div>
    </div>
  );
};

export default ContactRoute;
