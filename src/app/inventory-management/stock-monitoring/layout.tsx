import Layout from "@/modules/layout/mainLayout";

export default function StockMonitorLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }