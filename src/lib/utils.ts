import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { jwtDecode } from "jwt-decode";
import { Shop } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface JWTReturnType {
  role:string
  user_id: string
  email:string
}

export function getRoleFromToken (token:string){
  try{
      const decodedToken = jwtDecode<JWTReturnType>(token)
      const role = decodedToken.role;
      const id = decodedToken.user_id;
      const email = decodedToken.email;
      return {role, id, email};
  }catch(error){
      console.log("error decoding token:",error);
      return null
  }
  
}

export function getDataToken (token:string){
  try{
      const decodedToken = jwtDecode(token)
      return decodedToken;
  }catch(error){
      console.log("error decoding token:",error);
      return null
  }
  
}

export const calculateTotalSales = (shop: Shop): number => {
  let total = 0;
  shop.products.forEach((product) => {
    product.order_items.forEach((item) => {
      if (item.status === "Completed") {
        total += item.subtotal ?? item.quantity * item.price;
      }
    });
  });
  return total;
};


export const calculateLastMonthSales = (shop: Shop, dateRange: string): number => {
  const now = new Date();
  let startDate: Date;
  let endDate: Date = now;

  const getLastDayOfMonth = (year: number, month: number): Date => {
    return new Date(Date.UTC(year, month + 1, 0, 23, 59, 59));
  };
  

  switch (dateRange) {
    case "thisWeek":
      startDate = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() - now.getUTCDay()
        )
      );
      endDate = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() + (6 - now.getUTCDay())
        )
      );
      break;
    case "thisMonth":
      startDate = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)
      );
      endDate = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0)
      );
      break;
    case "thisYear":
      startDate = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
      endDate = new Date(Date.UTC(now.getUTCFullYear(), 11, 31));
      break;
    case "lastWeek":
      const lastWeekEnd = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() - now.getUTCDay() - 1
        )
      );
      startDate = new Date(
        Date.UTC(
          lastWeekEnd.getUTCFullYear(),
          lastWeekEnd.getUTCMonth(),
          lastWeekEnd.getUTCDate() - 6
        )
      );
      endDate = lastWeekEnd;
      break;
    case "lastMonth":
      startDate = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1)
      );
      endDate = getLastDayOfMonth(now.getUTCFullYear(), now.getUTCMonth() - 1);
      console.log(
        `Last Month Range: ${startDate.toISOString()} to ${endDate.toISOString()}`
      );
      break;
    case "lastYear":
      startDate = new Date(Date.UTC(now.getUTCFullYear() - 1, 0, 1)); // January 1, 2024
      endDate = new Date(
        Date.UTC(now.getUTCFullYear() - 1, 11, 31, 23, 59, 59)
      ); // December 31, 2024, 23:59:59 UTC
      console.log(
        `Last Year Range: ${startDate.toISOString()} to ${endDate.toISOString()}`
      );
      break;
    default:
      startDate = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1)
      );
      endDate = new Date();
  }

  let total = 0;
  shop.products.forEach((product) => {
    product.order_items.forEach((item) => {
      if (item.status === "Completed") {
        const itemDate = new Date(item.created_at || "");
        if (itemDate >= startDate && itemDate <= endDate) {
          total += item.subtotal ?? item.quantity * item.price;
        }
      }
    });
  });
  return total;
};

export const calculateTotalOrders = (shop: Shop): number => {
  const orderIds = new Set<string>();
  shop.products.forEach((product) => {
    product.order_items.forEach((item) => {
      if (item.status === "Completed") {
        orderIds.add(item.order_id);
      }
    });
  });
  return orderIds.size;
};

export const calculateGrowth = (shop: Shop, dateRange: string): string => {
  const totalSales = calculateTotalSales(shop);
  const lastMonthSales = calculateLastMonthSales(shop, dateRange);
  if (lastMonthSales === 0) return "N/A";
  const growth = ((totalSales - lastMonthSales) / lastMonthSales) * 100;
  return `${growth.toFixed(1)}%`;
};

export const getLinearMax = (maxSales: number): number => {
  if (maxSales <= 10_000) return 10_000;
  if (maxSales <= 50_000) return 50_000;
  if (maxSales <= 100_000) return 100_000;
  if (maxSales <= 200_000) return 200_000;
  if (maxSales <= 500_000) return 500_000;
  if (maxSales <= 1_000_000) return 1_000_000;
  if (maxSales <= 5_000_000) return 5_000_000;
  if (maxSales <= 10_000_000) return 10_000_000;
  if (maxSales <= 50_000_000) return 50_000_000;
  if (maxSales <= 100_000_000) return 100_000_000;
  if (maxSales <= 500_000_000) return 500_000_000;
  if (maxSales <= 1_000_000_000) return 1_000_000_000;
  return 2_000_000_000; 
};

export const getLinearTicks = (maxSales: number): number[] => {
  if (maxSales <= 10_000) return [0, 2_000, 4_000, 6_000, 8_000, 10_000]; 
  if (maxSales <= 50_000) return [0, 10_000, 20_000, 30_000, 40_000, 50_000]; 
  if (maxSales <= 100_000) return [0, 20_000, 40_000, 60_000, 80_000, 100_000]; 
  if (maxSales <= 200_000) return [0, 40_000, 80_000, 120_000, 160_000, 200_000]; 
  if (maxSales <= 500_000) return [0, 100_000, 200_000, 300_000, 400_000, 500_000]; 
  if (maxSales <= 1_000_000) return [0, 200_000, 400_000, 600_000, 800_000, 1_000_000]; 
  if (maxSales <= 5_000_000) return [0, 1_000_000, 2_000_000, 3_000_000, 4_000_000, 5_000_000]; 
  if (maxSales <= 10_000_000) return [0, 2_000_000, 4_000_000, 6_000_000, 8_000_000, 10_000_000]; 
  if (maxSales <= 50_000_000) return [0, 10_000_000, 20_000_000, 30_000_000, 40_000_000, 50_000_000]; 
  if (maxSales <= 100_000_000) return [0, 20_000_000, 40_000_000, 60_000_000, 80_000_000, 100_000_000]; 
  if (maxSales <= 500_000_000) return [0, 100_000_000, 200_000_000, 300_000_000, 400_000_000, 500_000_000]; 
  if (maxSales <= 1_000_000_000) return [0, 200_000_000, 400_000_000, 600_000_000, 800_000_000, 1_000_000_000]; 
  return [0, 400_000_000, 800_000_000, 1_200_000_000, 1_600_000_000, 2_000_000_000]; 
};

export const getDateRange = (range: string) => {
  const now = new Date();
  let startDate: Date;
  let endDate: Date;

  switch (range) {
    case "thisWeek":
      startDate = new Date(now.setDate(now.getDate() - now.getDay())); 
      startDate.setHours(0, 0, 0, 0); 
      endDate = new Date(); 
      endDate.setHours(23, 59, 59, 999); 
      break;
    case "thisMonth":
      startDate = new Date(now.getFullYear(), now.getMonth(), 1); 
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(); 
      endDate.setHours(23, 59, 59, 999);
      break;
    case "thisYear":
      startDate = new Date(now.getFullYear(), 0, 1); 
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(); 
      endDate.setHours(23, 59, 59, 999);
      break;
    case "lastWeek":
      endDate = new Date(now.setDate(now.getDate() - now.getDay() - 1)); 
      endDate.setHours(23, 59, 59, 999);
      startDate = new Date(endDate);
      startDate.setDate(endDate.getDate() - 6); 
      startDate.setHours(0, 0, 0, 0);
      break;
    case "lastMonth":
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1); 
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(now.getFullYear(), now.getMonth(), 0); 
      endDate.setHours(23, 59, 59, 999);
      break;
    case "lastYear":
      startDate = new Date(now.getFullYear() - 1, 0, 1); 
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date(now.getFullYear() - 1, 11, 31); 
      endDate.setHours(23, 59, 59, 999);
      break;
    default:
      return { startDate: undefined, endDate: undefined }; 
  }

  return {
    startDate: startDate.toISOString(), 
    endDate: endDate.toISOString(), 
  };
};

