import { MainHeader } from "@/components/common/Header";
import { MainFooter } from "@/components/common/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainHeader />
      <main className="flex justify-center bg-slate-100">{children}</main>
      <MainFooter />
    </div>
  );
}
