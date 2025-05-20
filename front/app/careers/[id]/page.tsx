"use client";

import CareersDetail from "@/app/careers/[id]/careers-detail";
import { getJobDetail } from "../../api/job-detail.api";
import { useParams } from "next/navigation";

export default function Home() {
  const jobs = getJobDetail();
  const params = useParams();
  const { id } = params;

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return <div>찾을 수 없는 채용공고입니다.</div>;
  }

  return (
    <div className="max-w-xl">
      <CareersDetail job={job} />
    </div>
  );
}
