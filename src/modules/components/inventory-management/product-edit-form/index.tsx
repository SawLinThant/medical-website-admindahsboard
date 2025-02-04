"use client";

import { useEffect, useState } from "react";
import { ProductInfo } from "../../product-management/productDetailForm";
import { useGetProductById } from "@/lib/hooks/useGetQuery";

type ProducEditFormProps = {
  id: string;
};

const ProductEditForm: React.FC<ProducEditFormProps> = ({ id }) => {
  const { product, refetchProduct } = useGetProductById(id);
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    id: "",
    name: "",
    price: 0,
    bulk_price: 0,
    quantity: 0,
    description: "",
    dosage: "",
    usage: "",
    storage: "",
    category_id: "",
    category: {
      id: "",
      name: "",
    },
  });
   useEffect(() => {
      if (product) setProductInfo(product);
    }, [product]);
  return <div></div>;
};
export default ProductEditForm;
