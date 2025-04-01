import Layout from "@/modules/layout/mainLayout";

export default function CreateIndividualAnnouncementLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }