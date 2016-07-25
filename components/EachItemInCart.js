import React from "react";
import { calc_total } from  "../reducers/shop_cart";
import { onCheckout } from "../actions";
import CartSection from "./CartSection";
import EachCartItem from "./EachCartItem";


const EachItemInCart = ({cart_items, cart_content, cart_button}) => {
  if(cart_items && cart_items.length > 0){
    cart_content = cart_items.map(createCart);
    cart_button =
      <button
        disabled= "false"
        onClick = {() => {
          store.dispatch(onCheckout())
        }}>Checkout</button>;
    }else{
      cart_content = <p>Please add some products to cart</p>;
      cart_button=  <button disabled="true">Checkout</button>
    }
};

const mapStateToProps= (state) => {
  const cart_items=  state.cart_prod.item_ids,
	     id_and_quantity = state.cart_prod.id_and_quantity;
  let    cart_button, cart_content, store_prod;
	const total = calc_total(state);

  let createCart = function(item_id)  {
    state.store_prod.map(eachProduct => {
      if(item_id === eachProduct.item_id){
          store_prod = eachProduct;
      }
    });
    return <EachCartItem key={item_id}
              item_quantity={id_and_quantity[item_id]}
              {...store_prod} />
    };
  <EachItemInCart cart_items={cart_items}
      cart_content={cart_content}
      cart_button= {cart_button} total= {total}/>
  console.log('cartcontent is...', cart_content);
  console.log('total is...', total);
  console.log('cart_button is...', cart_button);
  return {
     cart_content: cart_content,
     total:   total,
     cart_button: cart_button
  };
};


const YourCart = connect(mapStateToProps)(CartSection);
