"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { House, Menu, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export function CareerHeader({ isLoggedIn }: { isLoggedIn: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-[52px] w-full max-w-xl items-center justify-between border-b-2 bg-white px-4">
      <Link href="/" className="text-lg font-bold text-blue-600">
        JOB PLAY
      </Link>

      {isLoggedIn ? (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-white">
            <div className="mt-4 flex flex-col space-y-4">
              <Link href={`/settings/pages`} className="text-left">
                👤 마이 페이지
              </Link>
              <button className="text-left">⭐️ 지원 현황</button>
              <button className="text-left">🔴 채용 공고</button>
              <button className="text-left">💼 직군 및 정보</button>
              <button className="text-left">❓ FAQ</button>
              <button className="text-left" onClick={() => signOut()}>
                ⏲ 로그아웃
              </button>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Button variant="outline" onClick={() => router.push("/login")}>
          로그인 / 회원가입
        </Button>
      )}
    </header>
  );
}

type Props = {
  title?: string;
};

export function MenuHeader({ title }: Props) {
  const router = useRouter();
  return (
    <header className="flex h-[52px] w-full max-w-xl items-center justify-between border-b-2 bg-white px-4">
      <ChevronLeft onClick={() => router.back()} className="cursor-pointer" />
      {title ? (
        <h1 className="text-lg font-bold">{title}</h1>
      ) : (
        <div /> // 가운데 공간 확보용 (flex 균형 맞추기용)
      )}
      <House
        className="size-6 cursor-pointer"
        onClick={() => router.push("/")}
      />
    </header>
  );
}
