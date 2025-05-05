"use client";

interface LanguageInfo {
  language: string;
  proficiency: string;
  description?: string;
}

interface DescriptionProps {
  koreanLanguage?: {
    level: string;
    description?: string;
  };
  foreignLanguages?: LanguageInfo[];
  jobType?: string[];
  category?: string;
  updatedAt?: string;
  workingLocation?: string;
  website?: string;
}

export default function CareersDetailQualification({
  koreanLanguage,
  foreignLanguages = [],
  jobType = [],
  category,
  updatedAt,
  workingLocation,
  website
}: DescriptionProps) {
  if (
    !koreanLanguage &&
    foreignLanguages.length === 0 &&
    jobType.length === 0 &&
    !category &&
    !updatedAt &&
    !workingLocation &&
    !website
  )
    return null;

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm mt-4 text-sm text-gray-700 space-y-4">
      <h3 className="text-xl font-semibold text-gray-600">상세 내역</h3>

      {(jobType.length > 0 || category) && (
        <div className="mt-0 grid gap-1">
          <h4 className="text-gray-400">근무 형태</h4>
          <p className="font-semibold">
            {[...jobType, category].filter(Boolean).join(" / ")}
          </p>
        </div>
      )}

      {updatedAt && <hr className="my-4 border-gray-200" />}
      {updatedAt && (
        <div className="mt-0 grid gap-1">
          <h4 className="text-gray-400">공고 등록일</h4>
          <p className="font-semibold">{updatedAt}</p>
        </div>
      )}

      {workingLocation && <hr className="my-4 border-gray-200" />}
      {workingLocation && (
        <div className="mt-0 grid gap-1">
          <h4 className="text-gray-400">근무지역</h4>
          {/* <Map lat="sd" lng=""></Map> */}
          <p className="font-semibold">{workingLocation}</p>
        </div>
      )}

      {koreanLanguage && <hr className="my-4 border-gray-200" />}
      {koreanLanguage && (
        <div className="mt-0 grid gap-1">
          <h4 className="text-gray-400">한국어 수준</h4>
          <p className="font-semibold">
            {koreanLanguage.level} - {koreanLanguage.description}
          </p>
        </div>
      )}

      {foreignLanguages && <hr className="my-4 border-gray-200" />}
      {foreignLanguages.length > 0 && (
        <div className="mt-0 grid gap-1">
          <h4 className="text-gray-400">언어 능력</h4>
          <ul className="list-disc ml-5">
            {foreignLanguages.map((lang, i) => (
              <li key={i}>
                {lang.language} ({lang.proficiency}) - {lang.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {website && <hr className="my-4 pt-4 border-gray-200" />}
      {website && (
        <div className="m-0">
          <h4 className="font-semibold">홈페이지</h4>
          <a href={website} target="_blank" className="text-blue-600 underline">
            {website}
          </a>
        </div>
      )}
    </div>
  );
}
