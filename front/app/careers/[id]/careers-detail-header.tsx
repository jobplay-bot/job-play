"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Heart,
  CircleDollarSign,
  MapPin,
  BookA,
  ChevronLeft,
} from "lucide-react";

interface HeaderProps {
  company: string;
  title: string;
  deadline: string;
  location: string;
  salary: string;
  visaRequirements?: string[];
}

export default function CareersDetailHeader({
  company,
  title,
  deadline,
  location,
  salary,
  visaRequirements = [],
}: HeaderProps) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  return (
    <div className="rounded-b-lg border-b bg-white p-4 shadow-sm">
      <div className="mb-10 flex items-start justify-between text-sm">
        <ChevronLeft onClick={() => router.back()} className="cursor-pointer" />
        <Heart
          className={`cursor-pointer ${liked ? "fill-red-500 text-red-500" : "text-black"} size-5`}
          onClick={() => setLiked(!liked)}
        />
      </div>
      <div className="mb-1 flex items-start justify-between text-sm text-gray-500">
        <span>
          {company} • {deadline}
        </span>
      </div>
      <h2 className="mb-1 text-lg font-semibold">{title}</h2>
      <div className="flex items-center text-sm ">
        <CircleDollarSign className="mr-2 size-4 text-black" />
        {salary}
      </div>
      <div className="flex items-center text-sm ">
        <MapPin className="mr-2 size-4 text-black" />
        {location}
      </div>
      {visaRequirements.length > 0 && (
        <div className="flex items-center">
          <BookA className="mr-2 size-4 text-black" />
          <p className="text-sm ">{visaRequirements.join(" / ")}</p>
        </div>
      )}
    </div>
  );
}
