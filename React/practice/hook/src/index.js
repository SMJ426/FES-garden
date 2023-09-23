import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import UseEffect1 from "./UseEffect1";
import UseEffect2 from "./UseEffect2";
import UseRef1 from "./UseRef1";
import UseRef2 from "./UseRef2";
import UseRef3 from "./UseRef3";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<UseRef3 />);