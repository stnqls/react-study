import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import reducers from "./book/part3/redux/reducers";

const store = createStore(reducers);
const listener = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

store.subscribe(listener);
listener();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
