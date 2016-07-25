import React from "react";

const EachCartItem = ({item_name, item_price, item_quantity}) => {
  return (<li>{item_name} - ${item_price} x {item_quantity}</li>);
};

export default EachCartItem;
