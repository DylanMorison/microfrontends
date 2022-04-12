import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// we dont need to check for dev because Container will ALWAYS show all other microservices
ReactDom.render(<App />, document.querySelector("#root"));
