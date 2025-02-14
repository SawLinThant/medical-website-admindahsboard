"use client"

import ProductEditForm from "@/modules/components/inventory-management/product-edit-form";

const ProductDetail : React.FC = () => {
    return(
        <div className="">
            {/* <ProductDetailForm id={productId || ""} /> */}
            <ProductEditForm/>
        </div>
    )
}

export default ProductDetail;