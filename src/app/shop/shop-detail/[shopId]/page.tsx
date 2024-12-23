"use client"

import ShopDetailForm from "@/modules/components/shop/shopDetailForm";
import { useParams } from "next/navigation";

const ProductDetail : React.FC = () => {
    const {shopId} = useParams() as {shopId: string};
    return(
        <div className="">
            <ShopDetailForm id={shopId}/>
        </div>
    )
}
export default ProductDetail