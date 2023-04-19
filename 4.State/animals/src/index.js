import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./App";

// for bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<MyApp />);
