import Card from "./Card";
import Score from "./Score";

export default function Cards() {
  return (
    <section className="game-cards m-4 flex flex-row gap-2 items-end justify-center">
      <div className="flex flex-row gap-2">
        <Card cardNumber={5} />
        <Card cardNumber={5} />
        <Card cardNumber={5} />
      </div>
      <div>
        <Score cardTotal={5} />
      </div>
    </section>
  );
}
