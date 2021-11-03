import "bootstrap/dist/css/bootstrap.css";
import ReactstrapNavbar from "./book/part2/reactstrap/ReactstrapNavbar";
import ReactstrapPagination from "./book/part2/reactstrap/ReactstrapPagination";
import ReactstrapPopover from "./book/part2/reactstrap/ReactstrapPopover";
import ReactstrapProgress from "./book/part2/reactstrap/ReactstrapProgress";
import ReactstrapSpinner from "./book/part2/reactstrap/ReactstrapSpinner";
import ReactstrapTab from "./book/part2/reactstrap/ReactstrapTab";
import ReactstrapTable from "./book/part2/reactstrap/ReactstrapTable";

function App() {
  return (
    <div className="App">
      <ReactstrapNavbar />
      <ReactstrapPagination />
      <ReactstrapPopover />
      <ReactstrapProgress />
      <ReactstrapSpinner />
      <ReactstrapTable />
      <ReactstrapTab />
    </div>
  );
}
export default App;
