"use client";

import Link from "next/link";
export default function CareersDetailInfomation() {
  return (
    <div className="mb-6 mt-4 rounded-lg border bg-white p-4 shadow-sm ">
      <div className="grid gap-6 text-sm text-gray-500">
        <p>
          본 채용 정보는 잡플레이(JobPlay)의 동의 없이 무단으로 인용, 복제,
          재배포, 편집, 번역, 재가공할 수 없으며 구직 이외의 용도로 사용할 수
          없습니다.
        </p>
        <p>
          해당 채용 공고에 문제, 오류가 있다면{" "}
          <Link className="text-blue-600 underline decoration-sky-500" href="">
            여기
          </Link>
          를 클릭하여 문의를 남겨주세요.
        </p>
      </div>
    </div>
  );
}
