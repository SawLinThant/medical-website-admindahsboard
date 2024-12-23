"use client"

import ProductDetailForm from "@/modules/components/product-management/productDetailForm";
import { useParams } from "next/navigation";

const ProductDetail : React.FC = () => {
    const {productId} = useParams() as {productId: string};
    return(
        <div className="">
            <ProductDetailForm id={productId || ""} />
        </div>
    )
}

export default ProductDetail;