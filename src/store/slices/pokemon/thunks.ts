import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "../../../api/pokemonApi";
import { PokemonData } from "../../../interfaces";

export const getPokemons = createAsyncThunk(
  "pokemons/paginate",
  async ({ page }: { page: number }) => {
    const { data } = await pokemonApi.get<PokemonData>(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    return { pokemons: data.results, page };
  }
);
