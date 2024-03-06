import { configureStore } from "@reduxjs/toolkit";
import allMovieSlice from "./allMovieSlice";
import bookmarkedSlice from "./bookmarkedSlice";
import inputValueSlice from "./inputValueSlice";

const store = configureStore({
  reducer: {
    allMovies: allMovieSlice,
    bookmarked: bookmarkedSlice,
    inputValue: inputValueSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
