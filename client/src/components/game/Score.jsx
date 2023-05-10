import { useState, useEffect } from "react";
import icDanger from "../../content/svgs/danger.svg";

export default function Score({ cardTotal = 5, countLimit = 5 }) {
  const [over, setOver] = useState(false);

  useEffect(() => {
    if (cardTotal > countLimit) {
      setOver(true);
    } else {
      setOver(false);
    }
  }, [cardTotal]);

  return (
    <aside id="game-card-score">
      {!over && (
        <p>
          {cardTotal}/{countLimit}
        </p>
      )}
      {over && (
        <div
          className="
    animate__animated animate__flash animate__infinite animate__slower
    danger flex flex-col text-center
    "
        >
          <div className="flex flex-row gap-1">
            <img src={icDanger} alt="Danger icon" />
            <p>
              {cardTotal}/{countLimit}
            </p>
          </div>
          <h6 className="font-bold">AT RISK</h6>
        </div>
      )}
    </aside>
  );
}
