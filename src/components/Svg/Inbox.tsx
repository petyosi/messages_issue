import classNames from "classnames";
import React, { ReactElement } from "react";

export function Inbox({
  className,
  alt = "Inbox",
}: {
  className?: string;
  alt?: string;
}): ReactElement {
  return (
    <svg
      className={classNames(className, "fill-current", "Svg", "Svg__inbox")}
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25879 4C7.03097 4 5.95191 4.81395 5.6146 5.99451L5.6146 5.99452L4.03381 11.5273C4.02191 11.5656 4.013 11.6053 4.00735 11.646C4.0016 11.6866 3.99928 11.7272 4.00019 11.7673V17.25C4.00019 18.7688 5.23142 20 6.75019 20H17.2502C18.769 20 20.0002 18.7688 20.0002 17.25V11.7674C20.0011 11.7271 19.9988 11.6864 19.993 11.6455C19.9873 11.605 19.9784 11.5655 19.9666 11.5273L18.3857 5.99453L18.3857 5.99451C18.0484 4.81394 16.9695 4 15.7416 4H8.25879ZM18.2559 11L16.9435 6.40661L16.9434 6.40659C16.7901 5.86995 16.2997 5.5 15.7416 5.5H8.25879C7.7007 5.5 7.21021 5.86997 7.05689 6.4066L7.05688 6.40661L5.74449 11H9.17104C9.91247 11 10.4558 11.4678 10.7759 11.8695L5.52253 11.7769L5.52253 11.7769L10.776 11.8696C10.7874 11.8839 10.7985 11.8981 10.8093 11.9122C11.0848 12.271 11.5156 12.5 12.0002 12.5C12.4848 12.5 12.9156 12.271 13.1911 11.9122L10.776 11.8696C10.776 11.8696 10.776 11.8696 10.7759 11.8695L13.1911 11.9122C13.5062 11.5018 14.0615 11 14.8293 11H18.2559ZM5.50019 17.25V12.5H9.17104C9.25084 12.5 9.41837 12.5636 9.61948 12.8256L9.61951 12.8256C10.1666 13.5382 11.0296 14 12.0002 14C12.9708 14 13.8338 13.5382 14.3809 12.8256L14.3809 12.8256C14.5821 12.5636 14.7495 12.5 14.8293 12.5H18.5002V17.25C18.5002 17.9404 17.9406 18.5 17.2502 18.5H6.75019C6.05983 18.5 5.50019 17.9404 5.50019 17.25Z"
      />
    </svg>
  );
}
