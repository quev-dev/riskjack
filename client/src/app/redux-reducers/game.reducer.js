import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    Deck: [],
    Turn: "Player1",
    Goal: 21,
  },
  reducers: {
    changeGoal: (state, action) => {
      state.Goal = action.payload;
    },
  },
});

export const { changeGoal } = gameSlice.actions;
export const selectGame = (state) => state.game;

export default gameSlice.reducer;
