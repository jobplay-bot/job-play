"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { UploadIcon, LinkIcon } from "lucide-react";
import { useRouter } from 'next/navigation'

export default function MyPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-xl p-4 bg-white space-y-6">
      <h1 className="text-xl font-semibold">마이 페이지</h1>

      <Card 
        className="cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out" 
        onClick={() => router.push('/settings/pages/profile')}
      >
        <CardContent className="flex items-start gap-4 p-4">
          <div className="w-20 h-20 bg-gray-200 rounded" />
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
        <label className="block text-sm font-medium mb-1">소유 비자 형태</label>
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
        <label className="block text-sm font-medium mb-1">자기 소개</label>
        <Textarea placeholder="소개 추가" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">학력</label>
        <Input placeholder="학력 추가" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">경력</label>
        <Input placeholder="경력 추가" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">언어 능력</label>
        <Input placeholder="언어 추가" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">이력서</label>
        <div className="space-y-2">
          <Button variant="outline" className="w-full flex items-center gap-2">
            <UploadIcon className="w-4 h-4" /> 파일 추가
          </Button>
          <Button variant="outline" className="w-full flex items-center gap-2">
            <LinkIcon className="w-4 h-4" /> 링크 등록
          </Button>
        </div>
      </div>
    </div>
  );
}
