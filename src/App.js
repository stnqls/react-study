import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}
export default App;
