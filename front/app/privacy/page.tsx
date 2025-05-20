import { MenuHeader } from "@/components/common/Header";

export default function Page() {
  return (
    <div className="bg-slate-100 flex items-center justify-center flex-col">
      <MenuHeader title="개인정보처리방침" />
      <div className="w-full mx-auto max-w-[576px] space-y-8 pb-40 min-h-screen bg-white">
        <main className="max-w-3xl mx-auto px-4 py-8">
          <section className="space-y-4 text-sm leading-relaxed">
            <div>
              <h2 className="font-semibold mb-2">📄 개인정보처리방침</h2>
              <p>- 중국 국적자</p>
              <p>- 중국어 및 한국어 모두 능통한 자</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
