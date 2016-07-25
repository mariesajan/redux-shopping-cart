import React from "react";
import { connect } from "react-redux";
import EachProd from "./EachProd";
import DisplayList from "../components/DisplayList";

const mapStateToProps = (state) => {
  return {
    products: state.store_prod
  };
};

const ProductList = connect(mapStateToProps)(DisplayList);

export default ProductList;
