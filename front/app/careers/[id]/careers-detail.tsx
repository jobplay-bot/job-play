import CareersDetailHeader from "@/app/careers/[id]/careers-detail-header";
import CareersDetailInfo from "@/app/careers/[id]/careers-detail-info";
import CareersDetailQualification from "@/app/careers/[id]/careers-detail-qualification";
import CareersDetailInfomation from "./careers-detail-infomation";

export interface LanguageInfo {
  language: string;
  proficiency: string;
  description?: string;
}

export interface JobData {
  id: number;
  title: string;
  company: string;
  deadline: string;
  salary: string;
  location: string;
  workingLocation?: string;
  visaRequirements?: string[];
  visaSupport?: string;
  koreanLanguage?: {
    level: string;
    description?: string;
  };
  foreignLanguages?: LanguageInfo[];
  jobType?: string[];
  category?: string;
  website?: string;
  jobDescription?: string;
  workingConditions?: string;
  updatedAt?: string;
}

export default function JobDetailPage({ job }: { job: JobData }) {
  return (
    <div>
      <CareersDetailHeader
        company={job.company}
        title={job.title}
        deadline={job.deadline}
        location={job.location}
        salary={job.salary}
        visaRequirements={job.visaRequirements}
      />
      <CareersDetailInfo
        jobDescription={job.jobDescription}
        workingConditions={job.workingConditions}
        visaSupport={job.visaSupport}
        />
      <CareersDetailQualification
        koreanLanguage={job.koreanLanguage}
        foreignLanguages={job.foreignLanguages}
        jobType={job.jobType}
        category={job.category}
        updatedAt={job.updatedAt}
        workingLocation={job.workingLocation}
        website={job.website}
      />
      <CareersDetailInfomation />
    </div>
  );
}

