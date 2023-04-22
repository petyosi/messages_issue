import classNames from "classnames";
import React, { ReactElement } from "react";

export function Mouse({
  className,
  alt = "Mouse",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__mouse")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        d="M9 11.25V7.75C9 6.09315 10.3431 4.75 12 4.75H13.75C15.4069 4.75 16.75 6.09315 16.75 7.75V17.25C16.75 18.3546 17.6454 19.25 18.75 19.25H19.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4.75 10.75C4.75 9.09315 6.09315 7.75 7.75 7.75H10.25C11.9069 7.75 13.25 9.09315 13.25 10.75V16.25C13.25 17.9069 11.9069 19.25 10.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V10.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}