import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./components/App";
import reducers from "./reducers";
import theme from "./themes/dark";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>,
  document.querySelector("#root")
);
