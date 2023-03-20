import { createSlice } from "@reduxjs/toolkit";

const playerInitialState = {
  HP: 5,
  HPRisk: 1,
  Cards: [],
  Score: 0,
  RiskCards: [],
  playerState: "choosing",
};

export const playersSlice = createSlice({
  name: "players",
  initialState: {
    player1: { ...playerInitialState },
    player2: { ...playerInitialState },
  },
  reducers: {
    updateScore: (state, action) => {
      const { player } = action.payload;
      let newScore = 0;

      state[player].Score = newScore;
    },

    changeHP: (state, action) => {
      const { player, amount } = action.payload;
      state[player].HP = Math.max(0, Math.min(state[player].HP + amount, 5));
    },
    changeHPRisk: (state, action) => {
      const { player, amount } = action.payload;
      state[player].HPRisk = Math.max(
        0,
        Math.min(state[player].HPRisk + amount, 5)
      );
    },

    addCard: (state, action) => {
      const { player, card } = action.payload;
      state[player].Cards.push(card);
    },
    // add more player-related reducers as needed
  },
});

export const { changeHP, changeHPRisk, addCard } = playersSlice.actions;
export const selectPlayers = (state) => state.players;

export default playersSlice.reducer;
