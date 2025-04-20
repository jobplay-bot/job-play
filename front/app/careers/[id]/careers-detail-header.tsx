"use client";

import { useState } from "react";
import { Heart, CircleDollarSign, MapPin, BookA } from "lucide-react";

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

  return (
    <div className="p-4 border-b rounded-b-lg bg-white shadow-sm">
      <div className="flex justify-between items-start text-sm text-gray-500 mb-1">
        <span>{company} • {deadline}</span>
        <Heart
          className={`w-5 h-5 cursor-pointer ${liked ? "text-red-500 fill-red-500" : "text-gray-400"}`}
          onClick={() => setLiked(!liked)}
        />
      </div>
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <div className="flex items-center text-sm ">
        <CircleDollarSign className="h-4 w-4 mr-2 text-black"/>
        {salary}
      </div>
      <div className="flex items-center text-sm ">
        <MapPin className="h-4 w-4 mr-2 text-black" />
        {location}
      </div>
      {visaRequirements.length > 0 && (
        <div className="flex items-center">
          <BookA className="h-4 w-4 mr-2 text-black" />
          <p className="text-sm ">{visaRequirements.join(" / ")}</p>
        </div>
      )}
    </div>
  );
}
