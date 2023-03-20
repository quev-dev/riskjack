import { createSlice } from "@reduxjs/toolkit";
import { selectPlayers, changeHPRisk } from "./players.reducer";

const riskCardsSlice = createSlice({
  name: "riskCards",
  initialState: {
    riskCards: {
      "Risk-1": {
        description: "Your opponent's 'HPRisk' (bet) raises by one.",
        effect: (dispatch, players, currentPlayer) => {
          const opponent = currentPlayer === "player1" ? "player2" : "player1";
          dispatch(changeHPRisk({ player: opponent, amount: 1 }));
        },
      },
      "Risk-2": {
        description: "Your opponent's 'HPRisk' (bet) raises by two.",
        effect: (dispatch, players, currentPlayer) => {
          const opponent = currentPlayer === "player1" ? "player2" : "player1";
          dispatch(changeHPRisk({ player: opponent, amount: 2 }));
        },
      },
      "2-Card": {
        description:
          "Draw the 2 card. If it is not in the deck, nothing happens.",
        effect: (dispatch, players, currentPlayer) => {
          const card = "2";
          if (players[currentPlayer].Cards.includes(card)) {
            // Card already in hand
            return;
          }
          dispatch({
            type: "game/addCard",
            payload: {
              player: currentPlayer,
              card,
            },
          });
        },
      },
      // Repeat for all RiskCards
    },
  },
  reducers: {},
});

export const { selectRiskCards } = riskCardsSlice;
export default riskCardsSlice.reducer;

// Usage:
// import { selectRiskCards } from "./riskCards.reducer";
// const { riskCards } = useSelector(selectRiskCards);
// const dispatch = useDispatch();
// const currentPlayer = "player1";
// const players = useSelector(selectPlayers);

// To use a RiskCard:
// dispatch(riskCards["Risk-1"].effect(dispatch, players, currentPlayer));
