import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/navigation/Navbar";
import Dashboard from "./components/navigation/Dashboard";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
