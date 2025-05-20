'use client';

import JobCelebrationForm from "@/app/job-celebration-from";
import { Footer } from "@/components/common/Footer";
import { HeaderSection } from "@/components/common/HeaderSection";
import { CareerHeader } from "@/components/common/Header";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className="min-h-screen bg-gray-50 px-4 ">
      <div className="mx-auto max-w-[576px] space-y-8 bg-white">
        <CareerHeader isLoggedIn={!!session} />
        <HeaderSection/>
        <JobCelebrationForm /> 
        <Footer />
      </div>
    </div> 
  );
}
