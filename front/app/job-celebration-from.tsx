import JobDetailForm from "@/app/job-detail-form";
import { getJobDetail } from "./api/job-detail.api";

export default function JobCelebrationForm() {
  const jobs = getJobDetail();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-md space-y-8">
        {
          jobs.map((job, index) => (
            <JobDetailForm key={index} job={job}/>
          ))
        }
      </div>
    </div>
  );
}
