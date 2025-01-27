import { Button } from "@/components/ui/button";

export default function CareersDetailHeader() {
  return (
    <div className="grid gap-4">
      <sub className="text-sm text-gray-600">(주) 삼성전자</sub>
      <b className="text-2xl">삼성전자 외국인 마케터 모집</b>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          className="bg-red-50 text-red-600 hover:bg-red-100"
        >
          아르바이트
        </Button>
        <Button
          variant="secondary"
          className="bg-blue-50 text-blue-600 hover:bg-blue-100"
        >
          정규직
        </Button>
        <Button
          variant="secondary"
          className="bg-gray-200 text-gray-600 hover:bg-gray-100"
        >
          서울특별시 영등포구
        </Button>
      </div>
      <div className="grid gap-2">
        <p>제조/생산 {">"} 생산직 종사자</p>
        <p>월급 3,000,000 원</p>
        <p>F-2 거주, F-5 영주, F-4 재외동포, F-6 결혼이민</p>
      </div>
    </div>
  );
}
