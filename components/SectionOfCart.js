import React from "react";
import CartSection from "./CartSection";
import EachCartItem from "./EachCartItem";

const CartButton = ({onClick, isDisabled}) => {
  return (
    <button onClick = {onClick} disabled={isDisabled}>Checkout</button>
  );
};

const SectionOfCart = ({total, cart_items, onClick, cartProd, storeProd}) => {
  let store_prod, cart_content,
      id_and_quantity = cartProd.id_and_quantity,
      cart_button;
  let createCart = function(item_id)  {
    storeProd.map(eachProduct => {
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
      cart_button = <CartButton onClick={onClick} isDisabled= {false} />
    }else{
      cart_content = <p>Please add some products to cart</p>;
      cart_button = <CartButton isDisabled= {true} />
    }
    return (
      <CartSection
        cart_content= {cart_content}
        total={total} cart_button= {cart_button} />
    );
};

export default SectionOfCart;
