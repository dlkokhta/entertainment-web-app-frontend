import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  inputValue: any;
  movies: any[]; // You can replace 'any' with a more specific type for your movie data
}

const initialState: MovieState = {
  inputValue: null,
  movies: [],
};

const allMovieSlice = createSlice({
  name: "allMovies",
  initialState,
  reducers: {
    setAllMovies: (state, action: PayloadAction<any[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { setAllMovies } = allMovieSlice.actions;
export default allMovieSlice.reducer;
