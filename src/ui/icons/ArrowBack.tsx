import { SVGProps } from "react";

export function ArrowBack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width="24px"
      height="24px"
      fill="my.grayscale.5"
      {...props}
    >
      <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    </svg>
  );
}
