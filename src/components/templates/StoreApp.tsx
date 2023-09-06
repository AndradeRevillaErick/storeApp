import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store";
import { useEffect } from "react";
import { getProducts } from "../../store/slices/fakestore/thunks";

export const StoreApp = () => {
  const dispatch = useAppDispatch();
  const {
    page,
    products = [],
    isLoading,
  } = useAppSelector((state: RootState) => state.fakestore);

  useEffect(() => {
    dispatch(getProducts(1));
  }, []);

  return (
    <>
      <h1>HELLO React</h1>
      <h3>{page}</h3>
      <h4>Loading: {isLoading ? "SIMON" : "NEL"}</h4>
      {JSON.stringify(products)}
    </>
  );
};
