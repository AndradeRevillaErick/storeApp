import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { StoreApp } from "./components/templates/StoreApp";
// import { PokemonApp } from "./components/templates/PokemonApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PokemonApp /> */}
      <StoreApp />
    </Provider>
  </React.StrictMode>
);
