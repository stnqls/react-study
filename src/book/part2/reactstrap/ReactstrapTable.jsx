import React from "react";
import { Table } from "reactstrap";

class ReactstrapTable extends React.Component {
  render() {
    return (
      // <Table>
      // <Table dark bordered>
      <Table striped hover>
        {/* <Table borderless size="sm"> */}
        <thead>
          <tr>
            <th>number</th>
            <th>Book Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>React 100</td>
            <td>10000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>React 200</td>
            <td>20000</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ReactstrapTable;

//striped 속성은 짝수행에만 음영을 준다.
