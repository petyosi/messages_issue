import classNames from "classnames";
import React, { ReactElement } from "react";

export function Gavel({
  className,
  alt = "Gavel",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__gavel")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5303 4.21967C11.2374 3.92678 10.7626 3.92678 10.4697 4.21967L8.96967 5.71967C8.68696 6.00238 8.67713 6.45465 8.94019 6.74915L7.49915 8.19019C7.20465 7.92713 6.75238 7.93696 6.46967 8.21967L5.21967 9.46967C4.92678 9.76256 4.92678 10.2374 5.21967 10.5303L9.46967 14.7803C9.76256 15.0732 10.2374 15.0732 10.5303 14.7803L11.7803 13.5303C11.9119 13.3987 11.9844 13.2304 11.9977 13.0584L18.7197 19.7803C19.0126 20.0732 19.4874 20.0732 19.7803 19.7803C20.0732 19.4874 20.0732 19.0126 19.7803 18.7197L12.6857 11.625L13.5009 10.8098C13.7954 11.0729 14.2476 11.063 14.5303 10.7803L15.7803 9.53033C16.0732 9.23744 16.0732 8.76256 15.7803 8.46967L11.5303 4.21967ZM10.5303 7.28033C10.813 6.99762 10.8229 6.54535 10.5598 6.25085L11 5.81066L14.1893 9L13.9991 9.19019C13.7046 8.92713 13.2524 8.93696 12.9697 9.21967L12.125 10.0643L9.93566 7.875L10.5303 7.28033ZM8.875 8.93566L8.03033 9.78033C7.74762 10.063 7.29535 10.0729 7.00085 9.80981L6.81066 10L10 13.1893L10.1902 12.9991C9.92713 12.7046 9.93696 12.2524 10.2197 11.9697L11.0643 11.125L8.875 8.93566ZM4 18.75C4 17.2312 5.23122 16 6.75 16H11.25C12.7688 16 14 17.2312 14 18.75V19.25C14 19.6642 13.6642 20 13.25 20H4.75C4.33579 20 4 19.6642 4 19.25V18.75ZM5.525 18.5H12.475C12.3592 17.9294 11.8548 17.5 11.25 17.5H6.75C6.14525 17.5 5.64082 17.9294 5.525 18.5Z"
      />
    </svg>
  );
}
