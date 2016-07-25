import React from "react";

const CartSection = ({cart_content, total, cart_button}) => {
  return (
    <div>
      <h4>Your Cart</h4>
      <ul>{cart_content}</ul>
      <label>Total: ${total}</label>
      <br />
      {cart_button}
    </div>
  );
};

export default CartSection;
