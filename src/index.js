import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./components/App";
import Admin from "./components/admin/Admin";

import reducers from "./reducers";
import theme from "./themes/dark";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={App}></Route>
        <Route path="/admin" exact component={Admin}></Route>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.querySelector("#root")
);
