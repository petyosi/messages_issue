import classNames from "classnames";
import React, { ReactElement } from "react";

export function QuestionMark({
  className,
  alt = "Question Mark",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(
        className,
        "stroke-current",
        "Svg",
        "Svg__questionMark"
      )}
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
        d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.75 10C9.75 10 10 7.75 12 7.75C14 7.75 14.25 9 14.25 10C14.25 10.7513 13.8266 11.5027 12.9798 11.8299C12.4647 12.0289 12 12.4477 12 13V13.25"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
      ></path>
    </svg>
  );
}
