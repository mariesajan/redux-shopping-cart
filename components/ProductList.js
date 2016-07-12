import React from "react";
import { addToCart } from "../actions";

const EachProduct = ({item, onAddToCartClick}) => {
  let product_button;
  if(item.inventory > 0){
    product_button =
      <button onClick= {()=> onAddToCartClick(item.item_id)}>
        Add To Cart
      </button>;
  }else{
    product_button = <button disabled>Sold Out</button>;
  }
  return (
    <div>
      <li>{item.item_name} - ${item.item_price}</li>
      {product_button}
    </div>
  );
};

const ProductList = ({store}) => {
  const products= store.getState().store_prod;

  return (
      <ul>
        { products.map(item => <EachProduct key= {item.item_id} item= {item}
            onAddToCartClick= {(item_id)=> {
              store.dispatch(addToCart(item_id))
            }} /> ) }
      </ul>
  );
};


export default ProductList;
