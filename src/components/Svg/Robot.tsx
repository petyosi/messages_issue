import classNames from "classnames";
import React, { ReactElement } from "react";

export function Robot({
  className,
  alt = "Robot",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "stroke-current", "Svg", "Svg__robot")}
      fill="none"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M4.75 11.75C4.75 9.54086 6.54086 7.75 8.75 7.75H15.25C17.4591 7.75 19.25 9.54086 19.25 11.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V11.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 7.25V4.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.25 12C10.25 12.6904 9.69036 13.25 9 13.25C8.30964 13.25 7.75 12.6904 7.75 12C7.75 11.3096 8.30964 10.75 9 10.75C9.69036 10.75 10.25 11.3096 10.25 12Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.25 12C16.25 12.6904 15.6904 13.25 15 13.25C14.3096 13.25 13.75 12.6904 13.75 12C13.75 11.3096 14.3096 10.75 15 10.75C15.6904 10.75 16.25 11.3096 16.25 12Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.75 16.25H13.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
