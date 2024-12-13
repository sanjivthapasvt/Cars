//Importing required files
import React, { useState } from "react";
import "./App.css";
import Car from "./pages/Cars";
import ImageSlider from "./pages/Slider.jsx";
import NavBar from "./pages/NavBar.jsx";

function App() {

  //Display main page
  return (
    <>
      <NavBar/>
      <ImageSlider/>
      <br/>
      <br/>
      <br/>
      <Car/>

    </>
  );
}

export default App;
