import { createSlice } from "@reduxjs/toolkit";
import { getPokemons } from ".";
import { Result } from "../../../interfaces";

export interface PokemonState {
  page: number;
  pokemons: Result[];
  isLoading?: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  //es mejor si se usa la parte de los reducers para funciones sincronas
  reducers: {},
  //los extra reducers es mejor usarlos para peticiones asincronas
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemons = action.payload.pokemons;
        state.page = action.payload.page;
      })
      .addCase(getPokemons.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
