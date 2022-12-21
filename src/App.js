import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Solutions from "./screens/Solutions";
import AOS from "aos";
import React, { useEffect } from "react";
import About from "./screens/About";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="solutions" element={<Solutions />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
