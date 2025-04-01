import Layout from "@/modules/layout/mainLayout";

export default function CreateProductCategoryLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }