import Layout from "@/modules/layout/mainLayout";

export default function CreateCuponLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }