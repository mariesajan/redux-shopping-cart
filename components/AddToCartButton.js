import React from "react";

const AddToCartButton = ({onClick, buttonText, isDisabled}) => (
  <button id="btnProduct" type="button" onClick= {onClick}
      disabled= {isDisabled}>
    {buttonText}
  </button>
);

export default AddToCartButton;
