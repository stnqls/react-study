import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class ReactstrapBreadcrumbs extends React.Component {
  render() {
    return (
      <div id="top">
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#top">
            Go_top
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#bottom">
            Go_bottom
          </BreadcrumbItem>
        </Breadcrumb>
        <div
          id="bottom"
          style={{ marginTop: "1000px", backgroundColor: "orange" }}
        >
          <span>bottom</span>
        </div>
      </div>
    );
  }
}

export default ReactstrapBreadcrumbs;