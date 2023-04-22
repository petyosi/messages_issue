import classNames from "classnames";
import React, { ReactElement } from "react";

export function Building({
  className,
  alt = "Building",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__building")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 5.5C7.05964 5.5 6.5 6.05964 6.5 6.75V18.5H8V15C8 14.5858 8.33579 14.25 8.75 14.25H11.75C12.1642 14.25 12.5 14.5858 12.5 15V18.5H17.5V6.75C17.5 6.05964 16.9404 5.5 16.25 5.5H7.75ZM5 6.75V18.5H4.75C4.33579 18.5 4 18.8358 4 19.25C4 19.6642 4.33579 20 4.75 20H5.75H18.25H19.25C19.6642 20 20 19.6642 20 19.25C20 18.8358 19.6642 18.5 19.25 18.5H19V6.75C19 5.23122 17.7688 4 16.25 4H7.75C6.23122 4 5 5.23122 5 6.75ZM9.5 18.25V15.75H11V18.25H9.5ZM8 8C8 7.44772 8.44772 7 9 7H10.25C10.8023 7 11.25 7.44772 11.25 8C11.25 8.55229 10.8023 9 10.25 9H9C8.44771 9 8 8.55229 8 8ZM13.75 7C13.1977 7 12.75 7.44772 12.75 8C12.75 8.55229 13.1977 9 13.75 9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H13.75ZM8 11.5C8 10.9477 8.44772 10.5 9 10.5H10.25C10.8023 10.5 11.25 10.9477 11.25 11.5C11.25 12.0523 10.8023 12.5 10.25 12.5H9C8.44771 12.5 8 12.0523 8 11.5ZM13.75 10.5C13.1977 10.5 12.75 10.9477 12.75 11.5C12.75 12.0523 13.1977 12.5 13.75 12.5H15C15.5523 12.5 16 12.0523 16 11.5C16 10.9477 15.5523 10.5 15 10.5H13.75Z"
      />
    </svg>
  );
}
