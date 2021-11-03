import React from "react";
import { Badge, Button } from "reactstrap";

class ReactstrapBadges extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Product name <Badge color="secondary">hit</Badge>
        </h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>
          pill
        </Badge>
        <Badge href="http://google.com" color="light">
          GoLink
        </Badge>
      </div>
    );
  }
}

export default ReactstrapBadges;

// pill : 테두리 둥글게 적용
