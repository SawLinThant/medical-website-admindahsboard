import Layout from "@/modules/layout/mainLayout";

export default function CreateAdLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }