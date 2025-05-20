import { MenuHeader } from "@/components/common/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100">
      <MenuHeader />
      <main className="flex w-full items-center justify-center">
        {children}
      </main>
    </div>
  );
}
