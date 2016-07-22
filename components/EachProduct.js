import React from "react";
import AddToCartButton from "./AddToCartButton";
import ProductSection from "./ProductSection";

const EachProduct = ({item, onAddToCartClick}) => {
  let product_button;
  // if there is inventory
  if(item.inventory > 0){
    product_button =
      <AddToCartButton buttonText="Add To Cart"
          onClick={()=> onAddToCartClick(item.item_id)} isDisabled={false} />
  }else{
    // if no inventory
    product_button =
      <AddToCartButton buttonText="SoldOut" isDisabled={true} />
  }
  return (
    <ProductSection item_name= {item.item_name}
      item_price= {item.item_price}
      prod_button= {product_button} />
  );
};

export default EachProduct;
