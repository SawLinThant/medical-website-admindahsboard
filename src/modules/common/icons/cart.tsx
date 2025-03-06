interface CartProps {
  height: string;
  width: string;
  color?: string;
}

const CartIcon = ({ height, width, color }: CartProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 23"
      fill="none"
    >
      <path
        d="M4.33325 4.5H22.3333L20.0833 14.25H6.58325M20.0833 17.25H7.33325L3.58325 1.5H1.33325"
        stroke="#2FA1FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5833 21.75C19.4117 21.75 20.0833 21.0784 20.0833 20.25C20.0833 19.4216 19.4117 18.75 18.5833 18.75C17.7548 18.75 17.0833 19.4216 17.0833 20.25C17.0833 21.0784 17.7548 21.75 18.5833 21.75Z"
        stroke="#2FA1FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.83325 21.75C9.66168 21.75 10.3333 21.0784 10.3333 20.25C10.3333 19.4216 9.66168 18.75 8.83325 18.75C8.00482 18.75 7.33325 19.4216 7.33325 20.25C7.33325 21.0784 8.00482 21.75 8.83325 21.75Z"
        stroke="#2FA1FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CartIcon;
