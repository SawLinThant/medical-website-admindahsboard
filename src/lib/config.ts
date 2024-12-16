export type InputTagOptionType = {
  id: string;
  name: string;
};

export type ProductType = {
   id: string
   name: string
}

export type ProductImageype = {
   id: string
   image_url: string
   product_id: string
   product: ProductType
}
