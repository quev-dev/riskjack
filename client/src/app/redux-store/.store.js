import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "../redux-reducers/example.reducer.js";

import gameReducer from "../redux-reducers/game.reducer.js";
import playersReducer from "../redux-reducers/players.reducer.js";
// import riskCardsReducer from "../redux-reducers/riskCards.reducer.js";

export default configureStore({
  reducer: {
    example: exampleReducer,

    game: gameReducer,
    players: playersReducer,
    // riskCards: riskCardsReducer,
  },
});
