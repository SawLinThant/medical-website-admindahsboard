import Layout from "@/modules/layout/mainLayout";

export default function ShopReportLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }