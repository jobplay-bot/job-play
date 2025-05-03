import JobCelebrationForm from "@/app/job-celebration-from";
import { Footer } from "@/components/common/Footer";
import { HeaderSection } from "@/components/common/HeaderSection";
import { CareerHeader } from "@/components/common/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 ">
      <div className="mx-auto max-w-[576px] space-y-8 bg-white">
        <CareerHeader isLoggedIn={true} />
        <HeaderSection/>
        <JobCelebrationForm /> 
        <Footer />
      </div>
    </div> 
  );
}
