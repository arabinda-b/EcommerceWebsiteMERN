import "./App.css";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React, { useEffect } from "react";
import WebFont from "webfontloader";

import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js";


function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
  },[]);
  
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
