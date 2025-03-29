"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { JobDetail } from "../model/job.model";

interface Props {
  job: JobDetail;
}

export default function JobDetailForm({ job }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/careers"); // "/careers" 경로로 이동
  };

  return (
    <Card className="mx-auto max-w-md p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">헤달 D-7</h2>
        <Button variant="ghost" size="icon">
          <Share2 className="size-5" />
        </Button>
      </div>

      {/* Job Description */}
      <p className="mb-4 text-gray-700">
        헤달 갤러리에서 워크키에 마케터를 찾고있어요.
      </p>

      {/* Job Type Tabs */}
      <div className="mb-6 flex gap-2">
        <Button
          variant="secondary"
          className="bg-blue-50 text-blue-600 hover:bg-blue-100"
        >
          정규직
        </Button>
        <Button variant="ghost" className="text-gray-500">
          마케터
        </Button>
      </div>

      {/* Salary and Location */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">월급</span>
          <span className="font-medium">3,000,000원</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">서울특별시</span>
          <span className="font-medium">영등포구</span>
        </div>
      </div>

      {/* VISA Requirements */}
      <div className="mb-6">
        <h3 className="mb-3 font-medium">지원가능 VISA</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "F-2 기주",
            "F-5 영주",
            "F-4 재외동포",
            "F-6 결혼이민",
            "D-2 유학",
          ].map((visa) => (
            <Button key={visa} variant="outline" className="h-8 text-sm">
              {visa}
            </Button>
          ))}
        </div>
      </div>

      {/* Korean Language */}
      <div className="mb-6">
        <h3 className="mb-3 font-medium">한국어 능력</h3>
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
          <span className="text-sm text-gray-500">중급</span>
          <span className="text-sm">특정 주제로 토론 가능</span>
        </div>
      </div>

      {/* Foreign Language */}
      <div className="mb-6">
        <h3 className="mb-3 font-medium">외국어 능력</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">능숙</span>
            <span className="text-sm">워크키어 원어민 수 준</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">입문</span>
            <span className="text-sm">영어 간단한 지기소개 가능</span>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        className="w-full bg-blue-600 text-white hover:bg-blue-700"
        onClick={handleClick}
      >
        공고 자세히 보기
      </Button>
    </Card>
  );
}
