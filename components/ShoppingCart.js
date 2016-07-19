import React from "react";
import Products from "./Products";
import YourCart from "./YourCart";

const ShoppingCart = () => {
  // To know the value in store, print store.getState()
  return (
    <div>
      <h2>Shopping Cart Example</h2>
      <Products />
      <YourCart />
    </div>
  );
};

export default ShoppingCart;
