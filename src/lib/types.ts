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

export type PriceRangeType = {
   id: string;
   start_price: number;
   end_price: number;
}
