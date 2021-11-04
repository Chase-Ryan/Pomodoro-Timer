import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

export default function Session({ session, currentDuration }) {
  let bar = 100 - (100 * session?.timeRemaining) / (currentDuration * 60);

  if (!session) return null;

  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {session?.label} for {minutesToDuration(currentDuration)} minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
           {secondsToDuration(session?.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={bar} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${bar}%`}} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}
