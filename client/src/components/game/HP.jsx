import HPCard from "./HPCard";

export default function HP(hpCount = 5, riskCount = 1) {
  const hpCards = [];
  const atRiskArray = Array(5).fill(false);
  atRiskArray.splice(0, riskCount, ...Array(riskCount).fill(true));
  for (let i = 0; i < hpCount; i++) {
    hpCards.push(<HPCard key={i} atRisk={atRiskArray[i]} />);
  }

  return (
    <section className="mb-4 flex flex-row gap-2 items-center justify-center">
      {hpCards}
    </section>
  );
}
