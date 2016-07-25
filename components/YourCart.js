import React from "react";
import { calc_total } from  "../reducers/shop_cart";
import { onCheckout } from "../actions";
import CartSection from "./CartSection";
import EachCartItem from "./EachCartItem";


const YourCart= (props, {store}) => {
  const total = calc_total(store);
  let storeState= store.getState();
  let store_prod, cart_content,
      cart_items = storeState.cart_prod.item_ids,
      id_and_quantity = storeState.cart_prod.id_and_quantity,
      cart_button;

  let createCart = function(item_id)  {
    storeState.store_prod.map(eachProduct => {
      if(item_id === eachProduct.item_id){
          store_prod = eachProduct;
      }
    });
    return <EachCartItem key={item_id}
              item_quantity={id_and_quantity[item_id]}
              {...store_prod} />
    };

  if(cart_items && cart_items.length > 0){
    cart_content = cart_items.map(createCart);
    cart_button =
      <button onClick = {() => {
          store.dispatch(onCheckout());
        }}>Checkout</button>;
  }else{
    cart_content = <p>Please add some products to cart</p>;
      cart_button = <button disabled>Checkout</button>;
  }
  return (
    <CartSection
      cart_content= {cart_content}
      total={total} cart_button= {cart_button} />
  );
};

YourCart.contextTypes= {
  store: React.PropTypes.object
};

export default YourCart;
