import classNames from "classnames";
import React, { ReactElement } from "react";

export function UserCircle({
  className,
  alt = "User Circle",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(
        className,
        "fill-current",
        "Svg",
        "Svg__userCircle"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        d="M18.5 12C18.5 15.5899 15.5899 18.5 12 18.5V20C16.4183 20 20 16.4183 20 12H18.5ZM12 18.5C8.41015 18.5 5.5 15.5899 5.5 12H4C4 16.4183 7.58172 20 12 20V18.5ZM5.5 12C5.5 8.41015 8.41015 5.5 12 5.5V4C7.58172 4 4 7.58172 4 12H5.5ZM12 5.5C15.5899 5.5 18.5 8.41015 18.5 12H20C20 7.58172 16.4183 4 12 4V5.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M13.5 10C13.5 10.8284 12.8284 11.5 12 11.5V13C13.6569 13 15 11.6569 15 10H13.5ZM12 11.5C11.1716 11.5 10.5 10.8284 10.5 10H9C9 11.6569 10.3431 13 12 13V11.5ZM10.5 10C10.5 9.17157 11.1716 8.5 12 8.5V7C10.3431 7 9 8.34315 9 10H10.5ZM12 8.5C12.8284 8.5 13.5 9.17157 13.5 10H15C15 8.34315 13.6569 7 12 7V8.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M6.62148 16.5197C6.35622 16.8378 6.39908 17.3108 6.71721 17.576C7.03535 17.8413 7.50828 17.7984 7.77354 17.4803L6.62148 16.5197ZM16.2266 17.4803C16.4918 17.7984 16.9648 17.8413 17.2829 17.576C17.601 17.3108 17.6439 16.8378 17.3786 16.5197L16.2266 17.4803ZM7.77354 17.4803C8.78362 16.2689 10.3017 15.5 12.0001 15.5V14C9.83796 14 7.90434 14.9811 6.62148 16.5197L7.77354 17.4803ZM12.0001 15.5C13.6984 15.5 15.2165 16.2689 16.2266 17.4803L17.3786 16.5197C16.0958 14.9811 14.1622 14 12.0001 14V15.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
