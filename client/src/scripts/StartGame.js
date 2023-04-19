import { useSelector, useDispatch } from "react-redux";
import { selectGame } from "../app/redux-reducers/game.reducer.js";
import { addCard, selectPlayers } from "../app/redux-reducers/players.reducer.js";

export default function StartGame() {
  const players = useSelector(selectPlayers);
  const game = useSelector(selectGame);
  const dispatch = useDispatch();

  // Give each player 2 random cards from the deck
  players.addCard({ player: "player1" });
}
