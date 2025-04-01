import { IconProps } from "@/lib/types";

const Analysis: React.FC<IconProps> = ({
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
        d="M16 11.78L20.24 4.45L21.97 5.45L16.74 14.5L10.23 10.75L5.46 19H22V21H2V3H4V17.54L9.5 8L16 11.78Z"
        fill="#999999"
      />
    </svg>
  );
};

export default Analysis;
