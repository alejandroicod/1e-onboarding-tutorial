import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import "./styles/main.styl";

ReactDOM.render(<App />, document.getElementById("main"))