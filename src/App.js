// import Example1 from "./components/basicHooks/Example1";
// import Example2 from "./components/basicHooks/Example2";
// import Example3 from "./components/basicHooks/Example3";
// import Example4 from "./components/basicHooks/Example4";
// import Example5 from "./components/basicHooks/Example5";
// import Counter from "./components/basicHooks/Example";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
// import useHasMounted from "./hooks/useHasMounted";
import MouseTracker from "./components/MouseTracker";
import CustomTextInput from "./components/CustomTextInput";
// import AutoFocusTextInput from "./components/AutoFocusTextInput";
import ValidationSample from "./components/ValidationSample";
import ScrollBoxContainer from "./components/ScrollBoxContainer";

import Example from "./components/carousel/Example";
function App({ hasMounted }) {
  const width = useWindowWidth();
  // const hasMountedFromHooks = useHasMounted();
  // console.log(hasMounted, hasMountedFromHooks);
  return (
    <div className="App">
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      {/* <Example5 /> */}
      {/* <Counter /> */}
      {width}
      <MouseTracker />
      <CustomTextInput />
      {/* <AutoFocusTextInput /> */}
      <ValidationSample />
      <ScrollBoxContainer />
      <Example />
    </div>
  );
}
export default withHasMounted(App);
