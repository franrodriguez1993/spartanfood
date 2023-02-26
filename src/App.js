import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Accesories/Footer";
import Navbar from "./components/Accesories/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
