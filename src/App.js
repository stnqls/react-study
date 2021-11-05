import ReactonChange from "./book/part3/events/ReactonChange";
import ReactonClick from "./book/part3/events/ReactonClick";
import ReactonKey from "./book/part3/events/ReactonKey";
import ReactonMouseMove from "./book/part3/events/ReactonMouseMove";
import ReactonMouseOut from "./book/part3/events/ReactonMouseOut";
import ReactonMouseOver from "./book/part3/events/ReactonMouseOver";
import ReactonSubmit from "./book/part3/events/ReactonSubmit";

function App() {
  return (
    <div className="App">
      <ReactonClick />
      <ReactonChange />
      <ReactonMouseMove />
      <ReactonMouseOver />
      <ReactonMouseOut />
      <ReactonKey />
      <ReactonSubmit />
    </div>
  );
}
export default App;
