import React from "react";
import { Route } from "react-router-dom";
import ReactRouter from "./book/part3/reactRouterDom/ReactRouter";
import ReactRouter2 from "./book/part3/reactRouterDom/ReactRouter2";

function App() {
  return (
    <div>
      <Route exact path="/" component={ReactRouter} />
      <Route exact path="/reactRouter2" component={ReactRouter2} />
    </div>
  );
}

export default App;
