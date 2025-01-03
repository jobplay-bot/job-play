import JobDetailForm from "@/app/job-detail-form";

export default function JobCelebrationForm() {
  return (
    <div className="bg-gray- min-h-screen">
      <div className="mx-auto max-w-md space-y-8">
        <JobDetailForm />
        <JobDetailForm />
        <JobDetailForm />
      </div>
    </div>
  );
}
