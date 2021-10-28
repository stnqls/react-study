import Users from "./axios/Users";
import Counter from "./reducer/Counter";
import User from "./axios/User";

function App() {
  return (
    <div className="App">
      <Users />
      <Counter />
      <User />
    </div>
  );
}
export default App;
