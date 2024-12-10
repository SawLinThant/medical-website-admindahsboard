"use client"

import { SquareTerminal } from "lucide-react";
import { title } from "process";

export const SIDEBAR_ROUTES = [
    {
      title: "Product Management",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Product", 
          url: "product",
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
        icon: SquareTerminal,
        isActive: false,
        items: [
          {
            title: "Orders", 
            url: "orders",
          },
        ],
      },
      {
        title: "Noticfication",
        url: "#",
        icon: SquareTerminal,
        isActive: false,
        items: [
          {
            title: "Notifications", 
            url: "notification",
          },
        ],
      },
      {
        title: "Analytic and Reports",
        url: "#",
        icon: SquareTerminal,
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
