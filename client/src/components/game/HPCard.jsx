import icHeart from "../../content/svgs/heart.svg";

export default function HPCard({ atRisk = false }) {
  const hpCardClass = atRisk ? "hp-card-risk" : "";
  return (
    <div className={`hp-card animate__animated animate__fadeIn ${hpCardClass}`}>
      <img src={icHeart} alt="Heart icon" />
    </div>
  );
}
