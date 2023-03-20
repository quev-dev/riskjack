/*
* Opponent HP
* Opponent cards
* Your cards
* Your risk cards
* Your HP
* Controls
risk cards would be displayed somewhere on the side.
*/

import Cards from "./layouts/Cards";
import RiskCards from "./layouts/RiskCards";
import HP from "./layouts/HP";
import Controls from "./layouts/Controls";
import Forfeit from "./layouts/Forfeit";
import Dialogue from "./layouts/Dialogue";

export default function GameLayout() {
  return (
    <main id="game-layout">
      <section className="m-2"></section>

      <Dialogue text="I'm gonna stay."></Dialogue>

      <section className="m-2">
        <Cards></Cards>
        <RiskCards></RiskCards>
        <HP></HP>
        <Controls></Controls>
      </section>

      <Forfeit />
    </main>
  );
}
