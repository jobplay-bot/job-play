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
    <footer className="w-full max-w-xl flex flex-col gap-4 justify-center items-center h-[104px] px-4 bg-white border-b-2">
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
