"use client"

import { useGetImagesByProductId, useGetProductById, useGetTagsByProductId } from "@/lib/hooks/useGetQuery";
import ProductDetailForm from "@/modules/components/product-management/productDetailForm";
import { useParams } from "next/navigation";

const ProductDetail : React.FC = () => {
    const {productId} = useParams() as {productId: string};
    const {product} = useGetProductById(productId)
    const {images} = useGetImagesByProductId(productId)
    return(
        <div className="">
            <ProductDetailForm id={productId || ""} />
        </div>
    )
}

export default ProductDetail;