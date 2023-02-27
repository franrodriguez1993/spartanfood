import React from "react";
import "../css/AboutUSRoute/AboutUSRoute.css";

const AboutUSRoute = () => {
  return (
    <div className="aboutus-container">
      <h1 className="aboutroute-title">For true meat lovers</h1>
      <div className="aboutus-description_container">
        <section className="aboutus-description_left">
          <img src="/assets/img/steak.jpg" className="img-aboutus" />
        </section>
        <section className="aboutus-description_right">
          <p className="text-description_aboutus">
            Welcome to Spartanfood, a meat lover's paradise. We are a
            family-owned and operated restaurant dedicated to serving the finest
            quality meats in a warm and inviting atmosphere. Our passion for
            meat is evident in every dish we serve, from our perfectly seasoned
            steaks to our succulent ribs and chops. At Spartanfood, we believe
            that the key to great meat is using the freshest and highest quality
            ingredients. That's why we work closely with local farmers and
            suppliers to source only the best cuts of meat available. Our team
            of skilled chefs takes great care in preparing each dish to
            perfection, using traditional cooking techniques and seasoning
            blends that bring out the natural flavors of the meat. Whether
            you're in the mood for a classic steakhouse experience or something
            a little more adventurous, we have something for every meat lover on
            our menu. From our signature ribeye to our juicy lamb chops and
            everything in between, you're sure to find a dish that satisfies
            your cravings. We're more than just a restaurant - we're a community
            of meat lovers who are passionate about sharing our love of great
            food with others. We welcome you to come in, relax, and enjoy a meal
            with us. Whether you're a regular customer or a first-time visitor,
            we're confident that you'll love what we have to offer. Thank you
            for choosing Spartanfood. We look forward to serving you soon!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUSRoute;
