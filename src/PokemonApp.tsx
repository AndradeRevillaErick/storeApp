import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import { RootState } from "./store";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Loading: {isLoading ? "true" : "false"}</h1>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
