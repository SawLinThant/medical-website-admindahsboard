interface InventoryProps {
  height: string;
  width: string;
  color?: string;
}

const Inventory = ({ height, width, color }: InventoryProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 47 38"
      fill="none"
    >
      <path
        d="M41.5 9V32.2C41.5 34.86 39.36 37 36.7 37H10.3C7.64 37 5.5 34.86 5.5 32.2V9M15.5 17H31.5M4.7 1H42.3C43.1487 1 43.9626 1.33714 44.5627 1.93726C45.1629 2.53737 45.5 3.35131 45.5 4.2V5.8C45.5 6.22023 45.4172 6.63634 45.2564 7.02459C45.0956 7.41283 44.8599 7.76559 44.5627 8.06274C44.2656 8.35989 43.9128 8.5956 43.5246 8.75641C43.1363 8.91723 42.7202 9 42.3 9H4.7C3.85131 9 3.03737 8.66286 2.43726 8.06274C1.83714 7.46262 1.5 6.64869 1.5 5.8V4.2C1.5 3.77977 1.58277 3.36365 1.74359 2.97541C1.9044 2.58717 2.14011 2.23441 2.43726 1.93726C3.03737 1.33714 3.85131 1 4.7 1Z"
        stroke="#39AF9D"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Inventory;
