import CartIcon from "@/modules/common/icons/cart"
import Growth from "@/modules/common/icons/growth"
import Star from "@/modules/common/icons/star"


interface SquareBlockProps {
  totalProducts: number;
  totalSales: string;
  growthRate: string;
}
const SquareBlock:React.FC<SquareBlockProps> = ({ totalProducts, totalSales, growthRate }) => {
    return(
        <div className="w-full min-h-30 grid grid-cols-3 gap-x-6">
        <div className="w-full shadow-md border rounded-lg flex flex-col gap-3 justify-center text-center py-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="p-3 bg-[#F4B4001A] rounded-full flex items-center justify-center">
              <Star width="25" height="25"/>
            </div>
            <h2 className="font-medium">Total Products</h2>
          </div>
          <span className="text-xl font-bold">
            {totalProducts? totalProducts: "0"}
          </span>
        </div>
        <div className="w-full border shadow-md rounded-lg flex flex-col gap-3 justify-center text-center py-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="p-3 bg-secondary_color/20 rounded-full flex items-center justify-center">
              {/* <Archive size={25} /> */}
              <Growth height="20" width="20"/>
            </div>
            <h2 className="font-medium">Growth Rate</h2>
          </div>
          <span className="text-xl font-bold">
            {growthRate? growthRate : "-"}
          </span>
        </div>
        <div className="w-full border shadow-md rounded-lg flex flex-col gap-3 justify-center text-center py-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="p-3 bg-secondary_color/20 rounded-full flex items-center justify-center">
              {/* <Alert /> */}
              <CartIcon width="24" height="23"/>
            </div>
            <h2 className="font-medium">Totale Sales</h2>
          </div>
          <span className="text-xl font-bold">
           {totalSales?totalSales:"-"}
            </span>
        </div>
      </div>
    )
}
export default SquareBlock