import Layout from "@/modules/layout/mainLayout";
import React from "react";

export default function CreateProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}