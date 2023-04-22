import classNames from "classnames";
import React, { ReactElement } from "react";

export function Wallet({
  className,
  alt = "Wallet",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__wallet")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 6.5C5.5 5.94771 5.94771 5.5 6.5 5.5H15.25C15.9404 5.5 16.5 6.05964 16.5 6.75V7.5H6.5C5.94771 7.5 5.5 7.05229 5.5 6.5ZM18 6.75V7.5H19.25C19.6642 7.5 20 7.83579 20 8.25V17.25C20 18.7688 18.7688 20 17.25 20H6.75C5.23122 20 4 18.7688 4 17.25V6.75C4 6.72012 4.00175 6.69065 4.00514 6.66169C4.00173 6.60823 4 6.55432 4 6.5C4 5.11929 5.11929 4 6.5 4H15.25C16.7688 4 18 5.23122 18 6.75ZM5.5 8.79198V17.25C5.5 17.9404 6.05964 18.5 6.75 18.5H17.25C17.9404 18.5 18.5 17.9404 18.5 17.25V9H17.25H6.5C6.14445 9 5.80623 8.92578 5.5 8.79198ZM15 13C15 12.4478 15.4478 12 16 12C16.5522 12 17 12.4478 17 13C17 13.5522 16.5522 14 16 14C15.4478 14 15 13.5522 15 13Z"
      />
    </svg>
  );
}
