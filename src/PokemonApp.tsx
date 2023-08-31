import { useEffect } from "react";
import { RootState } from "./store";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

export const PokemonApp = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useAppSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons({ page: 1 }));
  }, []);

  return (
    <>
      <h1>Loading: {isLoading ? "true" : "false"}</h1>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons({ page: page + 1 }))}
      >
        Next
      </button>
    </>
  );
};
