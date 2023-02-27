import React from "react";
import "../css/LocationRoute/LocationRoute.css";
//AIzaSyB9Vd5GP459tsZy6mKddn9pa7BByQKGRrw
const LocationRoute = () => {
  return (
    <div className="locationroute-container">
      <div className="locationroute-body">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB9Vd5GP459tsZy6mKddn9pa7BByQKGRrw&q=Eiffel+Tower,Paris+France"
          className="iframe-map"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationRoute;
