import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/";
import { pokemonSlice } from "./slices/pokemon";
import { fakestoreSlice } from "./slices/fakestore/fakestoreSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    fakestore: fakestoreSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
