import Link from "next/link";
import { BellDot, UserRound } from "lucide-react";
import Logo from "../../public/logo.svg"
import Image from "next/image";
export const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-3 text-center">
        <h1 className="text-sm font-medium text-gray-900">Job Play</h1>
      </div>
    </header>
  );
};
export const MainHeader = () => {
  return (
    <header className="border-b border-gray-300 bg-white  border-1">
      <div className="flex justify-between mx-auto px-20 py-3 text-center">
        <div className="flex gap-4 py-2 ">
        <Link href='/'><Image src={Logo} alt="My SVG" /></Link>
          <Link href={``}>채용</Link>
          <Link href={``}>커뮤니티</Link>
          <Link href={``}>밋업</Link>
          <Link href={``}>이력서</Link>
          <Link href={``}>채용 공고 등록</Link>
        </div>
        <div className="flex gap-5">
          <BellDot />
          <div className="flex">
            <UserRound strokeWidth={1} color="#ffffff" className="bg-gray-300 rounded-full mr-2"/>
            로그인
          </div>
        </div>
      </div>
    </header>
  );
};
