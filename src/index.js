import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { store } from "./store";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
