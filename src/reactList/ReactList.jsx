import React from "react";
import axios from "axios";
import ListPage from "./ListPage";
import "./ReactList.css";

class ReactList extends React.Component {
  state = {
    loading: false,
    itemList: [],
  };
  loadItem = async () => {
    axios
      .get("./SearchJson.json")
      .then(({ data }) => {
        this.setState({
          loading: true,
          itemList: data.Item,
        });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          loading: false,
        });
      });
  };
  componentDidMount() {
    this.loadItem();
  }
  render() {
    const { itemList } = this.state;
    console.log(itemList);
    return (
      <div>
        <ListPage Itemcard={itemList} />
      </div>
    );
  }
}

export default ReactList;
