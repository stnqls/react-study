import React from "react";
import { Route } from "react-router-dom";

import Header from "./book/part4/Header/Header";
import LoginForm from "./book/part4/LoginForm";
import ReactThrottle from "./book/part4/ReactThrottle";
import FloatingPopulationList from "./book/part4/Floating_population/FloatingPopulationList";
import Footer from "./book/part4/Footer/Footer";

import "./book/part4/css/new.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/Throttle" component={ReactThrottle} />
        <Route path="/floatPopulationList" component={FloatingPopulationList} />
        <Footer />
      </div>
    );
  }
}
export default App;
