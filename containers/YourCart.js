import React from "react";
import { connect } from "react-redux";
import { calc_total } from  "../reducers/shop_cart";
import { onCheckout } from "../actions";
import SectionOfCart from "../components/SectionOfCart";

const mapStateToProps = (state) => {
  return {
    total: calc_total(state),
    cart_items: state.cart_prod.item_ids,
    cartProd: state.cart_prod,
    storeProd: state.store_prod
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: ()=> {
      dispatch(onCheckout())
    }
  };
};

const YourCart = connect(mapStateToProps, mapDispatchToProps)(SectionOfCart);

export default YourCart;
