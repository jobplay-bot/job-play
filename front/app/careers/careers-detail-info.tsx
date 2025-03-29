"use client";

import { Button } from "@/components/ui/button";
import { RefObject, useRef, useState } from "react";

export default function CareersDetailInfo() {
  const [activeTab, setActiveTab] = useState("details"); // 기본 활성 탭 설정
  const detailsRef = useRef(null);
  const conditionsRef = useRef(null);
  const qualificationsRef = useRef(null);

  const handleTabClick = (tab: string, ref: RefObject<HTMLElement | null>) => {
    setActiveTab(tab);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const baseClass =
    "w-full inline-block p-4 border-b-2 rounded-t-lg cursor-pointer";
  const activeClass =
    "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500";
  const inactiveClass =
    "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  return (
    <div className="grid">
      <div className="mb-12 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="flex flex-wrap ">
          <li className="me-2 flex-1">
            <div
              className={`${baseClass} ${activeTab === "details" ? activeClass : inactiveClass}`}
              onClick={() => handleTabClick("details", detailsRef)}
            >
              상세 내용
            </div>
          </li>
          <li className="me-2 flex-1">
            <div
              className={`${baseClass} ${activeTab === "conditions" ? activeClass : inactiveClass}`}
              onClick={() => handleTabClick("conditions", conditionsRef)}
            >
              모집 조건
            </div>
          </li>
          <li className="me-2 flex-1">
            <div
              className={`${baseClass} ${activeTab === "qualifications" ? activeClass : inactiveClass}`}
              onClick={() =>
                handleTabClick("qualifications", qualificationsRef)
              }
            >
              지원 자격
            </div>
          </li>
        </ul>
      </div>
      <div ref={detailsRef}>
        <div className="grid gap-4">
          <span className="text-gray-500">담당업무</span>
          <p className="font-bold">
            삼성전자 전략기획실 마케팅부서에서 동남아 해외 마케팅 업무를 담당
          </p>
        </div>

        <div className="grid gap-4">
          <span className="text-gray-500">우대사항</span>
          <p className="font-bold">3년 이상의 경력</p>
        </div>

        <div className="grid gap-4">
          <span className="text-gray-500">근무조건</span>
          <p className="font-bold">주5일 09:00 ~ 18:00</p>
        </div>
      </div>

      <hr className="my-12 border-y-4 border-gray-100" />

      <div ref={conditionsRef} className="grid gap-4">
        <h4 className="text-xl font-bold	">모집조건</h4>
        <div className="flex gap-3">
          <span className="text-gray-500">마감일자</span>
          <b>2024.08.31</b>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500">근무형태</span>
          <b>아르바이트, 정규직</b>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500">근무지역</span>
          <b>경기도 수원시 영통구</b>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500">급여</span>
          <b>월급 3,000,000원</b>
        </div>
      </div>

      <hr className="my-12 border-y-4 border-gray-100" />

      <div ref={qualificationsRef} className="grid gap-4">
        <h4 className="text-xl font-bold	">지원자격</h4>

        <div className="grid gap-4 rounded-2xl bg-gray-100 px-6 py-8">
          <b className="text-lg">한국어 능력</b>
          <p>일상적인 의사소통 가능</p>
        </div>

        <div className="grid gap-4 rounded-2xl bg-gray-100 px-6 py-8">
          <b className="text-lg">지원가능 비자</b>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {["F-2 기주", "F-5 영주", "F-4 재외동포", "F-6 결혼이민"].map(
                (visa) => (
                  <Button key={visa} variant="outline" className="h-8 text-sm">
                    {visa}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-4 rounded-2xl bg-gray-100 px-6 py-8">
          <b className="text-lg">우대사항</b>
          <p>마케팅 업무 경력 우대, 학력 무관</p>
        </div>
      </div>
    </div>
  );
}
