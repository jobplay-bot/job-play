"use client";

import { signIn } from "next-auth/react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
  const router = useRouter();
  const handleLogin = () => {
    signIn("google", { callbackUrl: "/" }); // 로그인 후 리디렉션 주소
  };

  return (
    <div className="flex flex-col items-center gap-4 max-w-[376px]">
      {/* Logo */}
      <div
        className="text-blue-600 font-bold text-lg cursor-pointer"
        onClick={() => router.push("/")}
      >
        JOB PLAY
      </div>

      {/* 설명 문구 */}
      <div className="text-sm text-gray-500 text-center">
        외국인을 위한 최고의 취업 플랫폼
        <br /> JOB PLAY
      </div>

      {/* 구글 로그인 버튼 */}
      <button
        onClick={handleLogin}
        className="w-full flex items-center justify-center gap-3 border px-6 py-3 rounded-full bg-white hover:bg-gray-50 shadow text-sm font-medium"
      >
        <Heart className="size-4" />
        <span>Google 계정으로 시작하기</span>
      </button>

      {/* 약관 동의 */}
      <p className="text-xs text-gray-400 text-center">
        가입 및 로그인을 진행하면 JOB PLAY의
        <br />
        <a href="/terms" className="underline text-blue-500">
          이용 약관
        </a>{" "}
        및{" "}
        <a href="/privacy" className="underline text-blue-500">
          개인정보 처리방침
        </a>
        에 동의하게 됩니다.
      </p>
    </div>
  );
}
