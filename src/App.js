import ForceUpdate from "./book/part2/state/ForceUpdate";
import ReactState from "./book/part2/state/ReactState";
import SetState from "./book/part2/state/SetState";

function App() {
  return (
    <div className="App">
      <ReactState reactString={"react"} />
      <SetState />
      <ForceUpdate />
    </div>
  );
}
export default App;
