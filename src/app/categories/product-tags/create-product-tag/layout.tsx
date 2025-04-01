import Layout from "@/modules/layout/mainLayout";

export default function CreateProductTagLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }