import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state: RootState) => state.pokemons);

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
