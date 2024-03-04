import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookmarkedState {
  bookmark: any[];
}

const initialState: BookmarkedState = {
  bookmark: [],
};

const bookmarkedSlice = createSlice({
  name: "bookmarked",
  initialState,
  reducers: {
    setBookmarked: (state, action: PayloadAction<any[]>) => {
      state.bookmark = action.payload;
    },
  },
});

export const { setBookmarked } = bookmarkedSlice.actions;
export default bookmarkedSlice.reducer;
