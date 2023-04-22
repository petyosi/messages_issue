import classNames from "classnames";
import React, { ReactElement } from "react";

export function CreditCardX({
  className,
  alt = "CreditCardX",
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
        "Svg__creditCardX"
      )}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 6.5C6.05964 6.5 5.5 7.05964 5.5 7.75V9.5H18.5V7.75C18.5 7.05964 17.9404 6.5 17.25 6.5H6.75ZM5.5 16.25V11H14.7735C14.7741 11 14.7746 11 14.7752 11H18.5V12.5928L19.2742 11.8127C19.4921 11.5933 19.7378 11.4182 20 11.2876V7.75C20 6.23122 18.7688 5 17.25 5H6.75C5.23122 5 4 6.23122 4 7.75V16.25C4 17.7688 5.23122 19 6.75 19H12.3241C12.4503 18.7527 12.6165 18.5204 12.8226 18.3127L13.6293 17.5H6.75C6.05964 17.5 5.5 16.9404 5.5 16.25ZM7.75 13.5C7.33579 13.5 7 13.8358 7 14.25C7 14.6642 7.33579 15 7.75 15H10.25C10.6642 15 11 14.6642 11 14.25C11 13.8358 10.6642 13.5 10.25 13.5H7.75Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2421 14.2783C13.9503 13.9844 13.9521 13.5095 14.2461 13.2177C14.5401 12.9259 15.0149 12.9277 15.3067 13.2217L18.0002 15.9354L20.6937 13.2217C20.9855 12.9277 21.4604 12.9259 21.7544 13.2177C22.0484 13.5095 22.0501 13.9844 21.7583 14.2783L19.0569 17L21.7583 19.7217C22.0501 20.0156 22.0484 20.4905 21.7544 20.7823C21.4604 21.0741 20.9855 21.0723 20.6937 20.7783L18.0002 18.0646L15.3067 20.7783C15.0149 21.0723 14.5401 21.0741 14.2461 20.7823C13.9521 20.4905 13.9503 20.0156 14.2421 19.7217L16.9435 17L14.2421 14.2783Z"
        fill="#0138FF"
      />
    </svg>
  );
}
