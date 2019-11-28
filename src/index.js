import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./Store/Reducer";
import { initState } from "./Store/InitState";

import "./main.css";

const store = createStore(RootReducer, initState, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
