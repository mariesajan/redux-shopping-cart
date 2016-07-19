import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import { storeApp } from "./reducers/shop_cart";

const store = createStore(storeApp);

const render =() => {
  ReactDOM.render(
    <Provider store= {store}>
      <ShoppingCart />
    </Provider>,
      document.getElementById('root')
    );
  };

store.subscribe(render);

render();
