// components/JobCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart, CircleDollarSign } from "lucide-react";

interface JobData {
  id: number;
  title: string;
  company: string;
  deadline: string;
  salary: string;
  location: string;
  visaRequirements: string[];
  visaSupport: string;
}

interface JobCardProps {
  job: JobData;
  onApplyClick: (jobId: number) => void; // optional로 처리해도 됨
}

export default function JobCard({ job, onApplyClick }: JobCardProps) {
  return (
    <Card className="p-4 rounded-xl border border-gray-200">
      <CardContent className="flex flex-col gap-3">
        {/* 카드 상단: 회사명과 마감일 */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            {job.company} {job.deadline}
          </div>
          <Heart className="h-4 w-4 text-gray-400" />
        </div>

        {/* 채용 제목 */}

        <div className="text-base font-semibold leading-tight">
          {job.title}
        </div>

        {/* 급여 조건 */}
        <div className="mt-3 mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2"><CircleDollarSign className="h-4 w-4 text-black"/></span>
            {job.salary}
          </div>

          {/* 지역 정보 */}
          <div className="flex items-center text-sm text-gray-600 mt-3">
            <MapPin className="h-4 w-4 mr-2 text-black" />
            {job.location}
          </div>
          </div>

        {/* 비자 조건 */}
        <div className="mb-3">
          <div className="text-sm font-semibold text-black mb-3">
            지원가능 비자
          </div>

          <div className="flex flex-wrap gap-2 text-sm mt-1">
            {job.visaRequirements.map((visa, idx) => (
              <Badge
                key={idx}
                className="bg-gray-100 text-gray-700 border border-gray-300"
              >
                {visa}
              </Badge>
            ))}
            {job.visaSupport && (
              <Badge className="bg-gray-100 text-gray-700 border border-gray-300">
                {job.visaSupport}
              </Badge>
            )}
          </div>
        </div>


        {/* 버튼 영역 */}
        <div className="mt-4 flex gap-2">
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
            바로 지원 하기
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => onApplyClick(job.id)}>
            공고 자세히 보기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
