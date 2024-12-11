import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/product-management/product/create-product");
  return null; 
  
}


