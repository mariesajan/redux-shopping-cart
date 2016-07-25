import { combineReducers } from 'redux';


let items = {
  store_products: [
    {
      item_id: 1,
      item_name: 'iPad 4 Mini',
      item_price: 500.01,
      inventory: 2
    },
    {
      item_id: 2,
      item_name: 'iPhone 5s',
      item_price: 450,
      inventory: 0
    },
    {
      item_id: 3,
      item_name: 'Milk Powder',
      item_price: 20,
      inventory: 9
    }
  ],
  cart_products: {
    item_ids: [],
    id_and_quantity: {}
  }
};

const updateQuantity = (state= items.cart_products.id_and_quantity, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      if(state[action.item_id]){
        return  Object.assign({}, state, state[action.item_id]= ++state[action.item_id]);
      }
     return Object.assign({}, state, state[action.item_id] = 1);
    case 'ON_CHECK_OUT':
     return {};
    default:
      return state;
  }
};

const addItemToCart= (state= items.cart_products.item_ids, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      if(state.indexOf(action.item_id) > -1){
        return state;
      }
     return [...state, action.item_id];
     case 'ON_CHECK_OUT':
      return [];
    default:
      return state;
  }
};

export function cart_prod(state= items.cart_products, action){

  switch(action.type){
    case 'ADD_TO_CART':
    case 'ON_CHECK_OUT':
      let func1 =  addItemToCart(state.item_ids, action); // [1]
      let func2 = updateQuantity(state.id_and_quantity, action);  // {1:1}
      return {
        item_ids: func1,
        id_and_quantity: func2
      };
    default:
     return state;
  }
}

const updateInventory = (state= [], action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      if(state.item_id !== action.item_id){
        return state;
      }
      return Object.assign({}, state, --state.inventory);
  }
};

export  function store_prod(state= items.store_products, action){
   switch(action.type) {
     case 'ADD_TO_CART':
      return state.map(item => updateInventory(item, action));
     case 'CHECK_OUT':
      return state;
     default:
      return state;
   }
}

export const storeApp = combineReducers({
  store_prod,
  cart_prod
 });

 export const calc_total= (state)=> {
    let total = 0, key;
    let id_qty_obj = state.cart_prod.id_and_quantity;
    let storeProd = state.store_prod;
    for(key in id_qty_obj){
      let storeProdItem = storeProd.filter(item => item.item_id === parseInt(key));
      let price = storeProdItem[0].item_price;
      total = total + price * id_qty_obj[key];
    }
    return total;
 };
