// import Users from "./axios/Users";
// import Counter from "./reducer/Counter";
import { BrowserRouter, Route } from "react-router-dom";
import PostMain from "./components/post/PostMain";
import PostView from "./components/post/PostView";

function App() {
  return (
    <div className="App">
      {/* <Users />
      <Counter /> */}

      <BrowserRouter>
        <Route exact path="/postView/:no" component={PostView} />
        <Route exact path="/" component={PostMain} />
      </BrowserRouter>
    </div>
  );
}
export default App;
