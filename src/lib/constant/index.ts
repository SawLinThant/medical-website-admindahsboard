"use client"

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
          title: "Products", 
          url: "products",
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
