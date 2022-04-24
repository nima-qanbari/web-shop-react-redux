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
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Shirt from "./pages/Shirt";
import Tshirt from "./pages/Tshirt";
import Nightwear from "./pages/Nightwear";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summer" element={<Summer />}/>
          <Route path="/autumn" element={<Autumn />}/>
          <Route path="/shirt" element={<Shirt />} />
          <Route path="/tshirt" element={<Tshirt />} />
          <Route path="/nightwear" element={<Nightwear />}/>
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUP />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
