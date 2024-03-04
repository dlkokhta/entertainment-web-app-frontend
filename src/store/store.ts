import { configureStore } from "@reduxjs/toolkit";
import allMovieSlice from "./allMovieSlice";
import bookmarkedSlice from "./bookmarkedSlice";

const store = configureStore({
  reducer: {
    allMovies: allMovieSlice,
    bookmarked: bookmarkedSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
