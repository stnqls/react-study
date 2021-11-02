import ComponentClass from "./book/part2/component/ComponentClass";
import FunctionComponent from "./book/part2/component/FunctionComponent";
import PureComponentClass from "./book/part2/component/PureComponentClass";
import ShallowEqual from "./book/part2/component/ShallowEqual";

function App() {
  return (
    <div className="App">
      <ComponentClass />
      <PureComponentClass />
      <ShallowEqual />
      <FunctionComponent contents="[This is FunctionComponent]" />
    </div>
  );
}
export default App;
