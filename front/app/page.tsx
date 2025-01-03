import JobCelebrationForm from "@/app/job-celebration-from";
import { Footer } from "@/components/common/Footer";
import { HeaderSection } from "@/components/common/HeaderSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-md space-y-8">
        <HeaderSection />
        <JobCelebrationForm />
        <Footer />
      </div>
    </div>
  );
}
