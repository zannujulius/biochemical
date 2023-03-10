import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import "animate.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
