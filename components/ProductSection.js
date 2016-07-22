import React from "react";

const ProductSection = ({item_name, item_price, prod_button}) =>  (
  <div>
    <li>{item_name} - ${item_price}</li>
    {prod_button}
  </div>
);

export default ProductSection;
