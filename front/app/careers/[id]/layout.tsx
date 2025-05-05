import { CareerHeader } from "@/components/common/Header";
import { MainFooter } from "@/components/common/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center flex-col bg-slate-100">
      <CareerHeader isLoggedIn={true} />
      <main className="bg-slate-100">{children}</main>
      <MainFooter />
    </div>
  );
}
