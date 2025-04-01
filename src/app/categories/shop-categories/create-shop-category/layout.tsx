import Layout from "@/modules/layout/mainLayout";

export default function CreateShopCategoryLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }