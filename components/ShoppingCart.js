import React from "react";
import Products from "./Products";
import YourCart from "./YourCart";

const ShoppingCart = ({store}) => {
  // To know the value in store, print store.getState()
  return (
    <div>
      <h2>Shopping Cart Example</h2>
      <Products store={store}/>
      <YourCart store={store}/>
    </div>
  );
};

export default ShoppingCart;
