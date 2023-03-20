import Card from "./Card";
import Score from "../layouts/Score";

import { useSelector } from "react-redux";
import { selectPlayers } from "../../app/redux-reducers/players.reducer";

export default function Cards() {
  const players = useSelector(selectPlayers);
  const playerScore = players.player1.Score;
  return (
    <section className="game-cards m-4 flex flex-row gap-2 items-end justify-center">
      <div className="flex flex-row gap-2">
        <Card cardNumber={5} />
        <Card cardNumber={5} />
        <Card cardNumber={5} />
      </div>
      <div>
        <Score cardTotal={playerScore} />
      </div>
    </section>
  );
}
