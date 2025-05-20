import { MenuHeader } from "@/components/common/Header";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100">
      <MenuHeader title="개인정보처리방침" />
      <div className="mx-auto min-h-screen w-full max-w-[576px] space-y-8 bg-white pb-40">
        <main className="mx-auto max-w-3xl px-4 py-8">
          <section className="space-y-4 text-sm leading-relaxed">
            <div>
              <h2 className="mb-2 font-semibold">📄 개인정보처리방침</h2>
              <p>- 중국 국적자</p>
              <p>- 중국어 및 한국어 모두 능통한 자</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
