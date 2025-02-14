"use client"

import { NestedOption } from "@/modules/common/components/nested-dropdown";
import { RadioType } from "@/modules/common/components/radio-button";
import { ChartLine, FileSpreadsheet, LayoutList, MessageSquareDot, SquareTerminal } from "lucide-react";

export const SIDEBAR_ROUTES = [
    {
      title: "Product Management",
      url: "#",
      icon: LayoutList,
      isActive: false,
      items: [
        {
          title: "Product", 
          url: "/product-management/product/product-list",
        },
        {
          title: "Category", 
          url: "products/category",
        },
        {
          title: "Stocks", 
          url: "products/stock",
        },
      ],
    },
    {
      title: "Inventory Management",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Stock Level Management", 
          url: "/inventory-management/stock-level-management",
        },
        {
          title: "Stock Monitoring", 
          url: "/inventory-management/stock-monitoring",
        },
      ],
    },
    {
        title: "Order Management",
        url: "#",
        icon: FileSpreadsheet,
        isActive: false,
        items: [
          {
            title: "Orders", 
            url: "/order/list",
          },
        ],
      },
      {
        title: "Noticfication",
        url: "#",
        icon: MessageSquareDot,
        isActive: false,
        items: [
          {
            title: "Notifications", 
            url: "/shop-notification",
          },
        ],
      },
      {
        title: "Analytic and Reports",
        url: "#",
        icon: ChartLine,
        isActive: false,
        items: [
          {
            title: "Report", 
            url: "reports",
          },
          {
            title: "Chart", 
            url: "chart",
          },
        ],
      },
  ];

  export const ADMIN_SIDEBAR_ROUTES = [
    {
      title: "Shop Management",
      url: "#",
      icon: LayoutList,
      isActive: false,
      items: [
        {
          title: "Shop", 
          url: "/shop/shop-list",
        },
        {
          title: "Category", 
          url: "products/category",
        },
      ],
    },
  ];

  export const options = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]

  export const STATUS = [
    {
      id: "1",
      name: "Pending",
      value: "Pending"
    },
    {
      id: "2",
      name: "Completed",
      value: "Completed"
    },
    {
      id: "3",
      name: "Delivering",
      value: "Delivering"
    },
    {
      id: "4",
      name: "Cancelled",
      value: "Cancelled"
    },
  ]

  export const StockAdjustmentOptoins: RadioType[] = [
    {
      id: "1",
      value: "add",
      label: "Add Stock"
    },
    {
      id: "2",
      value: "reduce",
      label: "Reduce Stock"
    },
  ]

  export const Nested_Options:NestedOption[] = [
   {
      id: "1",
      label: "Category",
      subOptions: [
        {
          id: "891a9504-f57d-40a8-a4bf-019637705552",
          name: "Vitamins and Supplements",
          type: "product category"
        },
        {
          id: "ef9eae9c-0fb5-4e16-8d4e-fca3382ca974",
          name: "Pain Relief",
            type: "product category"
        },
        {
          id: "d678d049-0918-4ed0-9271-802cef35d85f",
          name: "Senior Health",
          type: "product category"
        },
        {
          id: "3aef36fc-864b-492f-a0e0-b5cd11250826",
          name: "Digestive Health",
          type: "product category"
        },
        {
          id: "5ba858ad-7ca5-4a54-a29f-498654787752",
          name: "Children's Medications",
          type: "product category"
        },
        {
          id: "8274178f-85cc-4906-9569-cc83da42421b",
          name: "Cold and Alergy",
          type: "product category"
        },
        {
          id: "428ae6b5-840d-43c3-a2e8-7ddbd55a449a",
          name: "OTC",
          type: "product category"
        },
        {
          id: "5a1c48d1-23e6-42cc-b407-81a97afc795d",
          name: "Prescription Drugs",
          type: "product category"
        },
      ]
   },
   {
    id:"2",
    label:"Stock Status",
    subOptions:[
      {
        id:"In Stock",
        name:"In Stock",
        type: "stock status"
      },
      {
        id:"Low Stock",
        name:"Low Stock",
         type: "stock status"
      },
      {
        id:"Out of Stock",
        name:"Out of Stock",
         type: "stock status"
      },
    ]
   },
   {
    id:"3",
    label:"Stock Level",
    subOptions:[
      {
        id:"Above Default",
        name:"Above Default",
        type: "stock level"
      },
      {
        id:"At Default",
        name:"At Default",
         type: "stock level"
      },
      {
        id:"Below Default",
        name:"Below Default",
         type: "stock level"
      },
    ]
   }
  ]