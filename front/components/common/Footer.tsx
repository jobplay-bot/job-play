import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-8 text-center text-sm text-gray-500">
      © JOBPLAY
      <div className="mt-2">서비스 이용약관 | 개인정보 처리방침 </div>
    </footer>
  );
};

export const MainFooter = () => {
  return (
    <footer className="flex h-[104px] w-full max-w-xl flex-col items-center justify-center gap-4 border-b-2 bg-white px-4">
      <p className="flex justify-center">© JOBPLAY</p>
      <div className="flex gap-2">
        <Link href={``}>서비스 이용약관</Link>|
        <Link href={``} className="font-bold">
          개인정보 처리방침
        </Link>
      </div>
    </footer>
  );
};
