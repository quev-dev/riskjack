import icStay from "../../content/svgs/stay.svg";
import icHit from "../../content/svgs/hit.svg";

export default function Controls() {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <button className="flex flex-row gap-1">
        Hit
        <img src={icHit} alt="Receive card" />
      </button>
      <button className="flex flex-row gap-1">
        Stay
        <img src={icStay} alt="Stay with current cards" />
      </button>
    </div>
  );
}
