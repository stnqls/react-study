import Props from "./book/part2/Props";
import PropsBoolean from "./book/part2/PropsBoolean";
import PropsDatatype from "./book/part2/PropsDatatype";
import PropsDefault from "./book/part2/PropsDefault";
import PropsNode from "./book/part2/PropsNode";
import PropsObjVal from "./book/part2/PropsObjVal";
import PropsRequired from "./book/part2/PropsRequired";

function App() {
  return (
    <div className="App">
      <Props props_val="This is Props" />
      <PropsDatatype
        String="react"
        Number={200}
        Boolean={1 == 1}
        Array={[0, 1, 8]}
        ObjectJson={{ react: "리액트", twohundred: "200" }}
        Function={console.log("FunctionProps: function!")}
      />
      <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse />
      <PropsObjVal ObjectJson={{ react: "리액트", twohundred: "200" }} />
      <PropsRequired ReactNumber={200} />
      <PropsDefault ReactNumber={200} />
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}
export default App;
