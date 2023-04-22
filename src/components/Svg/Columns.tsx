import classNames from "classnames";
import React, { ReactElement } from "react";

export function Columns({
  className,
  alt = "Columns",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__columns")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.75 19.2502H9.25C9.80229 19.2502 10.25 18.8025 10.25 18.2502V5.75C10.25 5.19772 9.80229 4.75 9.25 4.75H5.75C5.19772 4.75 4.75 5.19772 4.75 5.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14.75C14.1977 4.75 13.75 5.19772 13.75 5.75V18.2502C13.75 18.8025 14.1977 19.2502 14.75 19.2502Z"
      ></path>
    </svg>
  );
}
