"use client";

import { useRouter } from 'next/navigation'
import { useState } from "react";
import { Heart, CircleDollarSign, MapPin, BookA, ChevronLeft } from "lucide-react";

interface HeaderProps {
  company: string;
  title: string; 
  deadline: string;
  location: string;
  salary: string;
  visaRequirements?: string[];
}

export default function CareersDetailHeader({ company, title, deadline, location, salary, visaRequirements = [] }: HeaderProps) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  return (
    <div className="p-4 border-b rounded-b-lg bg-white shadow-sm">
      <div className="flex justify-between items-start text-sm mb-10">
        <ChevronLeft onClick={() => router.back()} className="cursor-pointer" />
        <Heart
          className={`cursor-pointer ${liked ? "text-red-500 fill-red-500" : "text-black"} size-5`}
          onClick={() => setLiked(!liked)}
        />
      </div>
      <div className="flex justify-between items-start text-sm text-gray-500 mb-1">
        <span>{company} • {deadline}</span>
      </div>
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <div className="flex items-center text-sm ">
        <CircleDollarSign className="text-black size-4 mr-2" />
        {salary}
      </div>
      <div className="flex items-center text-sm ">
        <MapPin className="text-black size-4 mr-2" />
        {location}
      </div>
      {visaRequirements.length > 0 && (
        <div className="flex items-center">
          <BookA className="text-black size-4 mr-2" />
          <p className="text-sm ">{visaRequirements.join(" / ")}</p>
        </div>
      )}
    </div>
  );
}
