import React from "react";
import ItemCard from "./ItemCard";

class ListPage extends React.Component {
  id = 1;
  state = {};

  render() {
    const { Itemcard } = this.props;
    return (
      <ul className="list__itemview">
        {Itemcard &&
          Itemcard.map((itemdata, insertIndex) => {
            return (
              <ItemCard
                key={insertIndex}
                ImageURL={itemdata.ImageURL}
                BrandName={itemdata.BrandName}
                GoodsName={itemdata.GoodsName}
              />
            );
          })}
      </ul>
    );
  }
}

export default ListPage;
