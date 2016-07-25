import React from "react";
import EachProd from "../containers/EachProd";

const DisplayList = ({products}) => {
  return (
    <ul>
      { products.map(item => {
          return (<EachProd key ={item.item_id} item ={item}  />);
        }
      ) }
    </ul>
  );
};

export default DisplayList;
