import React from "react";

const SpinnerEnd = () => {
  return (
    <svg width="52" height="52" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2041_12093)">
        <circle cx="33.0016" cy="26.4" r="26.4" fill="#3831BF" />
      </g>
      <path
        d="M31.4525 14.0818C31.9841 12.6453 34.0159 12.6453 34.5475 14.0818L37.1932 21.2319C37.3603 21.6835 37.7164 22.0396 38.168 22.2067L45.3181 24.8524C46.7546 25.384 46.7546 27.4158 45.3181 27.9474L38.168 30.5931C37.7164 30.7602 37.3603 31.1163 37.1932 31.5679L34.5475 38.718C34.0159 40.1545 31.9841 40.1545 31.4525 38.718L28.8068 31.5679C28.6397 31.1163 28.2836 30.7602 27.832 30.5931L20.6819 27.9474C19.2454 27.4158 19.2454 25.384 20.6819 24.8524L27.832 22.2067C28.2836 22.0396 28.6397 21.6835 28.8068 21.2319L31.4525 14.0818Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2041_12093"
          x="0.0015626"
          y="0"
          width="66.0008"
          height="65.9998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6.6" />
          <feGaussianBlur stdDeviation="3.3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2041_12093" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2041_12093" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default SpinnerEnd;
