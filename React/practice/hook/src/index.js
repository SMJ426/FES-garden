import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import UseRef from "./UseRef";
import UseEffect1 from "./UseEffect1";
import UseEffect2 from "./UseEffect2";
import UseEffect_Quiz from "./UseEffect_Quiz";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<UseEffect2 />);