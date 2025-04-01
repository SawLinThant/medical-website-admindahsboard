import { IconProps } from "@/lib/types";

const Ads: React.FC<IconProps> = ({
  width = "28",
  height = "28",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.506 15.992L8.03 9.02899C8.49 8.06199 9.192 7.26299 9.997 9.17999C10.74 10.95 11.847 14.19 12.502 15.995M6.652 13.002H11.321"
        stroke="#999999"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.464 4.318C2 5.636 2 7.758 2 12C2 16.242 2 18.364 3.464 19.682C4.93 21 7.286 21 12 21C16.714 21 19.071 21 20.535 19.682C21.999 18.364 22 16.242 22 12C22 7.758 22 5.636 20.535 4.318C19.072 3 16.714 3 12 3C7.286 3 4.929 3 3.464 4.318Z"
        stroke="#999999"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.484 8.98682V11.9818M18.484 11.9818V15.9248M18.484 11.9818H16.466C16.226 11.9818 15.988 12.0258 15.764 12.1128C14.071 12.7698 14.071 15.2128 15.764 15.8698C15.989 15.9568 16.226 16.0008 16.466 16.0008H18.484"
        stroke="#999999"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Ads;
