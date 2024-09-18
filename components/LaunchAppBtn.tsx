"use client";
import { useState } from "react";
import { Button } from "./ui/button";

const LaunchAppBtn = () => {
  const [hover, setHover] = useState(false);

  return (
    <Button
      className="hover_btn"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? "Coming Soon" : "Launch App"}{" "}
      {/* Toggle text based on hover state */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
      >
        <g clip-path="url(#clip0_11120_1495)">
          <path
            d="M2.25 0.734619H18V16.4846H15.75V4.57544L1.9248 18.4094L0.325195 16.8098L14.1592 2.98462H2.25V0.734619Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_11120_1495">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="matrix(-1 0 0 1 18 0.734619)"
            />
          </clipPath>
        </defs>
      </svg>
    </Button>
  );
};

export default LaunchAppBtn;
