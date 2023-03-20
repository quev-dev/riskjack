import pkg from "@reduxjs/toolkit";
const { createSlice } = pkg;

export const exampleSlice = createSlice({
  name: "example",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;
export const selectExample = (state) => state.example.value;

export default exampleSlice.reducer;