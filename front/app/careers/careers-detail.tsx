import CareersDetailHeader from "@/app/careers/careers-detail-header";
import CareersDetailInfo from "@/app/careers/careers-detail-info";
import CareersDetailQualification from "@/app/careers/careers-detail-qualification";

export default function CareersDetail() {
  return (
    <div className="grid gap-10 bg-white px-4 py-8 mb-40">
      <CareersDetailHeader />
      <hr className="border-y-4 border-gray-100" />
      <CareersDetailInfo />
      <hr className="border-y-4 border-gray-100" />
      <CareersDetailQualification />
    </div>
  );
}
