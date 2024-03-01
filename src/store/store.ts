import { configureStore } from "@reduxjs/toolkit";

import allMovieSlice from "./allMovieSlice";
import { allMovieTypes } from "../types/allMovieTypes.js";

const store = configureStore({
  reducer: {
    allMovies: allMovieSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
