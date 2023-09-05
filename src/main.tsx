import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { PokemonApp } from "./components/templates/PokemonApp";
// import { Test } from "./components/templates/Test";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Test /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);
