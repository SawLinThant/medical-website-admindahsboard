
import ProductEditForm from "@/modules/components/inventory-management/product-edit-form";
import { Suspense } from "react";

const ProductDetail : React.FC = () => {
    return(
        <Suspense>
             <div className="">
            {/* <ProductDetailForm id={productId || ""} /> */}
            <ProductEditForm/>
        </div>
        </Suspense>
       
    )
}

export default ProductDetail;