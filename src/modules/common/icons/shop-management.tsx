import { IconProps } from "@/lib/types";

const ShopManagement: React.FC<IconProps> = ({
  width = "28",
  height = "28",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.5 2.5H2.5V21.5H16.5V2.5Z"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 10.5H21.5V21.5H16.5"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10.5H12.5M9.5 7.5V13.5"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ShopManagement;
