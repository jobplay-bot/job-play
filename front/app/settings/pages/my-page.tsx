"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { UploadIcon, LinkIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MyPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-xl space-y-6 bg-white p-4">
      <h1 className="text-xl font-semibold">마이 페이지</h1>

      <Card
        className="cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-md"
        onClick={() => router.push("/settings/pages/profile")}
      >
        <CardContent className="flex items-start gap-4 p-4">
          <div className="size-20 rounded bg-gray-200" />
          <div className="flex-1 space-y-1 text-sm">
            <div className="font-semibold">Name</div>
            <div>YYYY. MM. DD / 성별 / 국가</div>
            <div className="text-gray-500">📞 번호를 입력해 주세요.</div>
            <div className="text-gray-500">🏠 거주지를 입력해 주세요.</div>
            <div className="text-gray-500">📧 이메일 주소를 입력해 주세요.</div>
          </div>
        </CardContent>
      </Card>

      <div>
        <label className="mb-1 block text-sm font-medium">소유 비자 형태</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="비자 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="visa1">비자1</SelectItem>
            <SelectItem value="visa2">비자2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">자기 소개</label>
        <Textarea placeholder="소개 추가" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">학력</label>
        <Input placeholder="학력 추가" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">경력</label>
        <Input placeholder="경력 추가" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">언어 능력</label>
        <Input placeholder="언어 추가" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">이력서</label>
        <div className="space-y-2">
          <Button variant="outline" className="flex w-full items-center gap-2">
            <UploadIcon className="size-4" /> 파일 추가
          </Button>
          <Button variant="outline" className="flex w-full items-center gap-2">
            <LinkIcon className="size-4" /> 링크 등록
          </Button>
        </div>
      </div>
    </div>
  );
}
