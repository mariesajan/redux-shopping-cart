import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import EachProduct from "../components/EachProduct";

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCartClick: (item_id) => {
      dispatch(addToCart(item_id))
    }
  };
};

const EachProd = connect(mapStateToProps, mapDispatchToProps)(EachProduct);

export default EachProd;
