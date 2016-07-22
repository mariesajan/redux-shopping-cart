import React from "react";
import { addToCart } from "../actions";
import EachProduct from "./EachProduct";

const EachProd = (props, {store}) => {
  const { item }  = props, { item_id } = item;
  return (
    <EachProduct key= {item_id} item= {item}
      onAddToCartClick= {(item_id)=> {
        store.dispatch(addToCart(item_id))
    }} />
  );
};

const ProductList = (props, {store}) => {
  const products= store.getState().store_prod;
  return (
    <ul>
      { products.map(item => {
          return (<EachProd key ={item.item_id} item ={item}  />);
        }
      ) }
    </ul>
  );
};

ProductList.contextTypes= {
  store: React.PropTypes.object
};

EachProd.contextTypes = {
  store: React.PropTypes.object
};

export default ProductList;
