import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import UseEffect1 from "./UseEffect1";
import UseEffect2 from "./UseEffect2";
import UseRef1 from "./UseRef1";
import UseRef2 from "./UseRef2";
import UseRef3 from "./UseRef3";
import UseRef4 from "./UseRef4";
import UseMemo1 from "./UseMemo1";
import UseMemo2 from "./UseMemo2";
import UseMemo3 from "./UseMemo3";
import UseMemo_example from "./UseMemo_example";
import UseMemo_example2 from "./UseMemo_example2";
import Context1 from "./Context1";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Context1 />);