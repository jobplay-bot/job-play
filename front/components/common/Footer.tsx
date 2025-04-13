import Image from "next/image";
import Logo from "@/public/logo.svg"
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
    <footer className="border-1 border-t border-gray-300 bg-white px-14 py-10 text-left text-sm  text-gray-400">
      <Image src={Logo} alt="My SVG" />
      <div className="mt-6">
        <p className="mt-2 text-sm">잡플레이 | 대표: 김민아, 양영직</p>
        <p className="mt-2 text-sm">서울특별시 영등포구 여의도동 IFC몰 50층 잡플레이 | 전화번호: 010-1234-5678</p>
        <p className="mt-2 text-sm">사업자등록번호 : 000-00-00000 | 통신판매번호 : 0000-서울영등포-0000 | 유료직업소개사업등록번호 : (국내) 제 0000-0000-123456789</p>
      </div>
      <div className="my-10 flex gap-10 font-bold">
        <Link href={``}>잡플레이 소개</Link>
        <Link href={``}>채용 서비스 문의</Link>
      </div>
      <p className="text-sm">© 2024 Jobplay Lab, Inc.</p>
    </footer>
  );
};
