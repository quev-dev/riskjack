import Cards from "./Cards";
import RiskCards from "./RiskCards";
import HP from "./HP";
import Controls from "./Controls";
import Forfeit from "./Forfeit";
import Dialogue from "./Dialogue";

export default function GameLayout() {
  return (
    <main id="game-layout">
      <section className="m-2"></section>

      <Dialogue text="[Sample dialogue]" />

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
