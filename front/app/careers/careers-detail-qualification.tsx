import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersDetailQualification() {
  return (
    <div className="grid gap-4">
      <h4 className="text-xl font-bold	">채용 담당자</h4>

      <div className="grid gap-4">
        <div className="flex gap-3">
          <span className="text-gray-500">담당자명</span>
          <b>홍길동</b>
        </div>
        <div className="flex gap-3">
          <span className="text-gray-500">연락처</span>
          <b>010 - 1234 -5678</b>
        </div>
      </div>

      <Link href="#" className="rounded-2xl border border-gray-200 p-6">
        <b>(주) 삼성전자 홈페이지</b>
        <span>abcdefg.co.kr</span>
      </Link>

      <div className="grid gap-4 rounded-2xl bg-gray-100 px-6 py-8 text-sm">
        <span>
          본 채용 정보는 잡플레이(JobPlay)의 동의 없이 무단으로 인용, 복제,
          재배포, 편집, 번역, 재가공할 수 없으며 구직 이외의 용도로 사용할 수
          없습니다.
        </span>
        <span>
          해당 채용 공고에 문제, 오류가 있다면
          <Link href="" className="mx-2 underline">
            여기를 클릭하여 문의를 남겨주세요.
          </Link>
        </span>
      </div>
      <Button
        variant="secondary"
        className="bg-blue-600 text-white hover:bg-blue-800"
      >
        이메일로 지원하기
      </Button>
    </div>
  );
}
