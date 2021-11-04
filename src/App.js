import "bootstrap/dist/css/bootstrap.css";
import AxiosGet from "./book/part2/fetch,axios,promise/AxiosGet";
import AxiosPost from "./book/part2/fetch,axios,promise/AxiosPost";
import CallbackFunc from "./book/part2/fetch,axios,promise/CallbackFunc";
import Promise from "./book/part2/fetch,axios,promise/Promise";
import PromiseCatch from "./book/part2/fetch,axios,promise/PromiseCatch";

function App() {
  return (
    <div className="App">
      <AxiosGet />
      <AxiosPost />
      <CallbackFunc />
      <Promise />
      <PromiseCatch />
    </div>
  );
}
export default App;
