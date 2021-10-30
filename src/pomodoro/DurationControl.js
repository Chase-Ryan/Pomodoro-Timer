import React from "react";
import { minutesToDuration } from "../utils/duration";


export default function DurationControl({label, duration, handleDecrease, handleIncrease, isDisabled}) {

  return (
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid={`duration-${label.toLowerCase()}`}>
            {/* TODO: Update this text to display the current focus session duration */}
            {label} Duration: {minutesToDuration(duration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid={`decrease-${label.toLowerCase()}`}
              onClick={handleDecrease}
              disabled={isDisabled}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid={`increase-${label.toLowerCase()}`}
              onClick={handleIncrease}
              disabled={isDisabled}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
  );
}
