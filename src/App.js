import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, desertData } from "./components/Products/data";
import Feature from "./components/Feature";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for you!" data={desertData} />
    </Router>
  );
}

export default App;
