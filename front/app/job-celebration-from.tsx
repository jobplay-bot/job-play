"use client";

import JobDetailForm from "@/app/job-detail-form";
import { Footer } from "@/app/Footer";
import { HeaderSection } from "@/app/HeaderSection";

export default function JobCelebrationForm() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-md space-y-8">
        <HeaderSection />
        <JobDetailForm />
        <Footer />
      </div>
    </div>
  );
}
