import React from "react";
import "../css/AboutUSRoute/AboutUSRoute.css";

const AboutUSRoute = () => {
  return (
    <div className="aboutus-container">
      <h1 className="aboutroute-title">For true meat lovers</h1>
      <div className="aboutus-description_container">
        <div className="aboutus-description_section--top">
          <section className="aboutus-description_left">
            <img src="/assets/img/steak.jpg" className="img-aboutus" />
          </section>
          <section className="aboutus-description_right">
            <span className="aboutus-description_text--span">
              Welcome to Spartanfood, a meat lover's paradise.
            </span>
            <p className="aboutus-description_text--p">
              We are a family-owned and operated restaurant dedicated to serving
              the finest quality meats in a warm and inviting atmosphere. Our
              passion for meat is evident in every dish we serve, from our
              perfectly seasoned steaks to our succulent ribs and chops. At
              Spartanfood, we believe that the key to great meat is using the
              freshest and highest quality ingredients. That's why we work
              closely with local farmers and suppliers to source only the best
              cuts of meat available.
            </p>
          </section>
        </div>
        <hr className="aboutus-description_hr" />

        <span className="aboutus-description_text--span">
          Our team is prepared for you!
        </span>

        <div className="aboutus-description_section--bottom">
          <img
            src="/assets/img/image2.jpg"
            alt="image"
            className="description-section_bottom--img"
          />

          <p className="aboutus-description_text--p2">
            Our team of skilled chefs takes great care in preparing each dish to
            perfection, using traditional cooking techniques and seasoning
            blends that bring out the natural flavors of the meat. Whether
            you're in the mood for a classic steakhouse experience or something
            a little more adventurous, we have something for every meat lover on
            our menu. From our signature ribeye to our juicy lamb chops and
            everything in between, you're sure to find a dish that satisfies
            your cravings.
          </p>

          <hr className="aboutus-description_hr" />

          <span className="aboutus-description_text--span">
            We're more than just a restaurant!
          </span>
          <img
            src="/assets/img/people.jpg"
            alt="image"
            className="description-section_bottom--img"
          />

          <p className="aboutus-description_text--p2">
            We're a community of meat lovers who are passionate about sharing
            our love of great food with others. We welcome you to come in,
            relax, and enjoy a meal with us. Whether you're a regular customer
            or a first-time visitor, we're confident that you'll love what we
            have to offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUSRoute;

/*          we're a community
            of meat lovers who are passionate about sharing our love of great
            food with others. We welcome you to come in, relax, and enjoy a meal
            with us. Whether you're a regular customer or a first-time visitor,
            we're confident that you'll love what we have to offer. Thank you
            for choosing Spartanfood. We look forward to serving you soon! */
