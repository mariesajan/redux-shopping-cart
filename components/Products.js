import React from "react";
import ProductList from "./ProductList";

const Products = ({store}) => {
  return (
    <div>
      <h4>Products</h4>
      <ProductList store={store}/>
    </div>
  );
};

export default Products;
