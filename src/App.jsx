import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <MainContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
