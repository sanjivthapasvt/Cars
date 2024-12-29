//Importing required files
import React, { useState } from "react";
import "./App.css";
import Car from "./pages/Cars";
import ImageSlider from "./pages/Slider.jsx";
import NavBar from "./pages/NavBar.jsx";
import About from "./pages/About.jsx";
import Design from "./pages/Design.jsx";
import Investors from "./pages/Investors.jsx";
import Vehicles from "./pages/Vehicles.jsx";
function App() {
  //Display main page
  let component
  switch (window.location.pathname) {
    case "/Cars":
      <App/>
      break;

    case "/About":
      component = <About />;
      break;

    case "/Design":
      component = <Design />;
      break;

    case "/Investors":
      component = <Investors />;
      break;

    case "/Vehicles":
      component = <Vehicles />;
      break;
  }
  return (
    <>
      <NavBar />
      {component}
      <ImageSlider />
      <br />
      <br />
      <br />
      <Car />
    </>
  );
}

export default App;
