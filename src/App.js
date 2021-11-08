// import Currying from "./book/part3/Currying";
import ContextApi from "./book/part3/ContextApi";
import ContextApi2 from "./book/part3/ContextApi2";
import ReactHoc from "./book/part3/ReactHoc";
import ReactRef from "./book/part3/ReactRef";

function App() {
  return (
    <div className="App">
      <ReactRef />
      {/* <Currying /> */}
      <ReactHoc name="React200" />
      <ContextApi />
      <ContextApi2 />
    </div>
  );
}
export default App;
