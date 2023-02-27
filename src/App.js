import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Accesories/Footer";
import Navbar from "./components/Accesories/Navbar";
import UpButtom from "./components/Accesories/UpButtom";

function App() {
  const [showButtom, SetShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? SetShowButton(true) : SetShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="outlet-container">
        <Outlet />

        {showButtom && (
          <div className={`scrollToTop`}>
            <UpButtom />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
