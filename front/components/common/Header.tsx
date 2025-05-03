'use client';

import Link from "next/link";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { House, Menu, ChevronLeft } from "lucide-react";
import { useRouter } from 'next/navigation'
 
export function CareerHeader({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full max-w-xl flex justify-between items-center h-[52px] px-4 bg-white border-b-2">
      <Link href='/' className="text-blue-600 font-bold text-lg">JOB PLAY</Link>

      {isLoggedIn ? (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-white">
            <div className="flex flex-col space-y-4 mt-4">
              <Link href={`/userMenu`} className="text-left">👤 마이 페이지</Link>
              <button className="text-left">⭐️ 지원 현황</button>
              <button className="text-left">🔴 채용 공고</button>
              <button className="text-left">💼 직군 및 정보</button>
              <button className="text-left">❓ FAQ</button>
              <button className="text-left">⏲ 로그아웃</button>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Button variant="outline">로그인 / 회원가입</Button>
      )}
    </header>
  );
}

export function MenuHeader() {
  const router = useRouter();
    return (
      <header className="w-full max-w-xl flex justify-between items-center h-[52px] px-4 bg-white border-b-2">
        <ChevronLeft onClick={() => router.back()} className="cursor-pointer"/>
        <House
          className="w-6 h-6 cursor-pointer"
          onClick={() => router.push('/')}
        />
      </header>
    );
  };