import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomeRoute from "./routes/HomeRoute";
import MenuRoute from "./routes/MenuRoute";
import LocationRoute from "./routes/LocationRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeRoute />} />
          <Route path="menu" element={<MenuRoute />} />
          <Route path="location" element={<LocationRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
