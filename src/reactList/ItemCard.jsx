import React from "react";

function ItemCard({ key, ImageURL, BrandName, GoodsName }) {
  return (
    <li className="component component--item card" key={key}>
      <img src={ImageURL} alt="" className="image--itemcard" />
      <p>
        브랜드명 : <span className="text--brand">{BrandName}</span>
      </p>
      <p>상품명 : {GoodsName}</p>
    </li>
  );
}

export default ItemCard;
