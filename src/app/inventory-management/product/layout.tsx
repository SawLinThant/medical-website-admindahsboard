import Layout from "@/modules/layout/mainLayout";

export default function InventoryProductLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }