import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputValueState {
  inputValue: string;
}

const initialState: InputValueState = {
  inputValue: "",
};

const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
