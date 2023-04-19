export default function Card({ cardNumber = 5 }) {
  return (
    <div className="game-card">
      <p>{cardNumber}</p>
    </div>
  );
}
