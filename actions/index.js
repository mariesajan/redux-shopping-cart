export const addToCart = (item_id) => {
   return {
    type: 'ADD_TO_CART',
    item_id
  };
}

export const onCheckout = () => {
  return {
    type: 'ON_CHECK_OUT'
  }
};
