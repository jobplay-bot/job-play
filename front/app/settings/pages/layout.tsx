import { MenuHeader } from "@/components/common/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 flex items-center justify-center flex-col">
      <MenuHeader />
      <main className="w-full flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
