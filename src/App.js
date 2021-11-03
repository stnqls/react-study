import "bootstrap/dist/css/bootstrap.css";

import ReactstrapAlerts from "./book/part2/reactstrap/ReactstrapAlerts";
import ReactstrapBadges from "./book/part2/reactstrap/ReactstrapBadges";
import ReactstrapBreadcrumbs from "./book/part2/reactstrap/ReactstrapBreadcrumbs";
import ReactstrapButtonGroup from "./book/part2/reactstrap/ReactstrapButtonGroup";
import ReactstrapCard from "./book/part2/reactstrap/ReactstrapCard";
import ReactstrapCollapse from "./book/part2/reactstrap/ReactstrapCollapse";
// import ReactstrapCarousel from "./book/part2/reactstrap/ReactstrapCarousel";
import ReactstrapDropdown from "./book/part2/reactstrap/ReactstrapDropdown";
import ReactstrapFade from "./book/part2/reactstrap/ReactstrapFade";
import ReactstrapForm from "./book/part2/reactstrap/ReactstrapForm";
// import ReactstrapInputGroup from "./book/part2/reactstrap/ReactstrapInputGroup";
import ReactstrapModal from "./book/part2/reactstrap/ReactstrapModal";

function App() {
  return (
    <div className="App">
      <ReactstrapAlerts />
      <ReactstrapBadges />
      <ReactstrapBreadcrumbs />
      <ReactstrapDropdown />
      <ReactstrapButtonGroup />
      <ReactstrapCard />
      {/* <ReactstrapCarousel /> */}
      <ReactstrapCollapse />
      <ReactstrapFade />
      <ReactstrapForm />
      {/* <ReactstrapInputGroup /> */}
      <ReactstrapModal />
    </div>
  );
}
export default App;
