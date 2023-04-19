import HPCard from "./HPCard";

import { useSelector, useDispatch } from "react-redux";
import {
  changeHPRisk,
  changeHP,
  selectPlayers,
} from "../../app/redux-reducers/players.reducer";

export default function HP() {
  const players = useSelector(selectPlayers);
  const dispatch = useDispatch();

  // Calculate the number of HPCard components to render based on the player's HP
  const hpCount = Math.max(0, Math.min(5, players.player1.HP));

  // Calculate the number of HPCard components that should have the atRisk prop set to true
  const riskCount = Math.max(0, Math.min(5, players.player1.HPRisk));

  // Create an array of booleans indicating which HPCard components should have the atRisk prop set to true
  const atRiskArray = Array(5).fill(false);
  atRiskArray.splice(0, riskCount, ...Array(riskCount).fill(true));

  // Render the HPCard components for each point of HP the player has
  const hpCards = [];
  for (let i = 0; i < hpCount; i++) {
    hpCards.push(<HPCard key={i} atRisk={atRiskArray[i]} />);
  }

  return (
    <section className="mb-4 flex flex-row gap-2 items-center justify-center">
      <button onClick={() => dispatch(changeHP({ player: "player1", amount: -1 }))}>
        -
      </button>
      <button onClick={() => dispatch(changeHP({ player: "player1", amount: 1 }))}>
        +
      </button>
      {hpCards}
      <div className="flex flex-col gap-1">
        <button onClick={() => dispatch(changeHPRisk({ player: "player1", amount: 1 }))}>
          +
        </button>
        <button onClick={() => dispatch(changeHPRisk({ player: "player1", amount: -1 }))}>
          -
        </button>
      </div>
      <p>{players.player1.HPRisk}</p>
    </section>
  );
}
