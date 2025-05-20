"use client";

import JobCard from "@/app/JobCard";
import { getJobDetail } from "./api/job-detail.api";
import { useRouter } from "next/navigation";

export default function JobCelebrationForm() {
  const router = useRouter();
  const jobs = getJobDetail();

  const handleApplyClick = (id: number) => {
    router.push(`/careers/${id}`); // "/careers" 경로로 이동
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-md space-y-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onApplyClick={handleApplyClick} />
        ))}
      </div>
    </div>
  );
}
