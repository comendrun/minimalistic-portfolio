import React from "react";

const ExportICon = ({ color = "white", size = 20, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.8334 9.9012L17.6667 3.06787"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3334 6.40088V2.40088H14.3334"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.16663 2.40088H7.49996C3.33329 2.40088 1.66663 4.06755 1.66663 8.23421V13.2342C1.66663 17.4009 3.33329 19.0675 7.49996 19.0675H12.5C16.6666 19.0675 18.3333 17.4009 18.3333 13.2342V11.5675"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ExportICon;
