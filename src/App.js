import React from "react";
import "./App.css";

//react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUP />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
