import ImportComponent from "./book/ImportComponent";
import LifecycleEx from "./book/LifecycleEx";
import LifecycleEx2 from "./book/LifecycleEx2";
import LifecycleEx3 from "./book/LifecycleEx3";
import LifecycleEx4 from "./book/LifecycleEx4";
import LifecycleEx5 from "./book/LifecycleEx5";

function App() {
  return (
    <div className="App">
      <ImportComponent />
      <LifecycleEx />
      <LifecycleEx2 />
      <LifecycleEx3 prop_value="FromApp.js1" />
      <LifecycleEx4 prop_value="FromApp.js2" />
      <LifecycleEx5 prop_value="FromApp.js3" />
    </div>
  );
}
export default App;
