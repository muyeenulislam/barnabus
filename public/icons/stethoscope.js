import React from "react";

const Stethoscope = ({ variant = "white" }) => {
  const strokeColor =
    variant === "white"
      ? "#FFFFFF"
      : variant === "teal"
      ? "#11C2CC"
      : variant === "purple"
      ? "#BE37D2"
      : variant === "violet"
      ? "#8C5CEB"
      : variant === "yellow"
      ? "#EBBB01"
      : "#000000";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5rem"
      height="2.5rem"
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M18.9604 2.91406C20.5702 2.91406 21.8754 4.27215 21.8754 5.94744C21.8754 7.33157 21.9278 8.56328 20.8092 9.5815C17.1481 12.9143 15.3175 14.5807 13.1254 14.5807C10.9333 14.5807 9.10272 12.9143 5.44152 9.5815C4.32287 8.56319 4.37539 7.33135 4.37539 5.94712C4.37539 4.272 5.68035 2.91406 7.2901 2.91406"
        stroke={strokeColor}
        strokeWidth="2.1875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.125 20.4141V25.5179C13.125 29.1425 16.0634 32.0809 19.6879 32.0809C23.3126 32.0809 26.251 29.1425 26.251 25.5179V23.3307"
        stroke={strokeColor}
        strokeWidth="2.1875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4173 10.2109L18.5183 14.9587C18.0134 16.2207 17.761 16.8517 17.3383 17.3702C16.9156 17.8888 16.3483 18.2631 15.2138 19.0118L13.0813 20.4193L10.986 19.008C9.87679 18.2611 9.32216 17.8875 8.90846 17.3751C8.49474 16.8628 8.2464 16.242 7.74972 15.0002L5.83398 10.2109"
        stroke={strokeColor}
        strokeWidth="2.1875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.625 18.9609C30.625 21.3773 28.6663 23.3359 26.25 23.3359C23.8337 23.3359 21.875 21.3773 21.875 18.9609C21.875 16.5446 23.8337 14.5859 26.25 14.5859C28.6663 14.5859 30.625 16.5446 30.625 18.9609Z"
        stroke={strokeColor}
        strokeWidth="2.1875"
      />
      <path
        d="M26.2612 18.9609H26.248"
        stroke={strokeColor}
        strokeWidth="2.91667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Stethoscope;
