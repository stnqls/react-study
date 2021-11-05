// import Currying from "./book/part3/Currying";
import ContextApi from "./book/part3/ContextApi";
import ReactHoc from "./book/part3/ReactHoc";
import ReactRef from "./book/part3/ReactRef";

function App() {
  return (
    <div className="App">
      <ReactRef />
      {/* <Currying /> */}
      <ReactHoc name="React200" />
      <ContextApi />
    </div>
  );
}
export default App;
