import CareersDetail from "@/app/careers/[id]/careers-detail";
import { getJobDetail } from "../../api/job-detail.api";

export default function Home({ params }: { params: { id: string } }) {
    const jobs = getJobDetail();
    const job = jobs.find(job => job.id === parseInt(params.id));
  
    if (!job) {
      return <div>찾을 수 없는 채용공고입니다.</div>
    }
  return (
    <div className=" max-w-xl">
      <CareersDetail job={job} />
    </div>
  );
}
