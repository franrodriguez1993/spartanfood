import React, { useEffect } from "react";
import "../css/LocationRoute/LocationRoute.css";

const LocationRoute = () => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = 35.1820494;
    const lon = 129.0766808;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <div className="locationroute-container">
      <h1 className="location-title">Visit us</h1>

      <div className="locationroute-body">
        <h4 className="locationroute-body_title">Location</h4>
        <p>
          <b className="locationroute-localname"> Spartan food North Local</b>
        </p>
        <p className="locationroute-body_title--p">
          Yeonje-gu, Yeonsan-dong 1356
        </p>
        <p className="locationroute-body_title--p">
          <b>South Korea - Busan </b>
        </p>

        <iframe
          id="iframeId"
          height="500px"
          width="100%"
          className="iframe-map"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationRoute;
