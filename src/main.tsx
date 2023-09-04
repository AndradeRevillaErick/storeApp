import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
// import { Test } from "./components/Test";
import { PokemonApp } from "./components/PokemonApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Test /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);
