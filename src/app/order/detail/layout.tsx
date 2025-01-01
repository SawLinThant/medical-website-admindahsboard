import Layout from "@/modules/layout/mainLayout";

export default function CreateProductLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }