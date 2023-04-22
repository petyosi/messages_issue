import React from "react";

export function Squircle() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="absolute bottom-0 right-0 z-0 opacity-0"
    >
      <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
        <path
          fill="red"
          stroke="none"
          d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
        />
      </clipPath>
    </svg>
  );
}
