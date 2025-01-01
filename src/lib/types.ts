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

export interface Product {
   id: string
   name: string
   price: number
   bulk_price: number
   quantity: number
   description: string;
   images: ProductImageype[]
}

export interface Shop {
   id: string
   name: string
   logo: string;
   description: string;
   address: string;
   phone: string;
   category_id: string
   created_at: string
   remark: string
   shop_admin_name: string
}

export interface OrderItem {
   id: string; 
   order_id: string;
   product_id: string; 
   quantity: number; 
   price: number; 
   status: string;
   subtotal?: number; 
   shop_id: string 
   product: Product
}

export interface User {
   id: string;
   name: string
   email: string
   phone: string
}

export interface Order {
   id: string; 
   user_id: string;
   status: string; 
   created_date: string;
   updated_date: string; 
   total_price?: number; 
   billing_address: string;
   billing_phone_no: string;
   payment_id: string;
   user: User
 }

 export interface ShopOrders {
   order_id: string;
   user_id: string;
   username: string;
   created_date: string;
   order_status: string;
   total_price: number
   billing_address: string;
   shipping_address: string;
   billing_phone_no: string;
   total_items: number
   shop_total_price: number
   payment: string;
 }
