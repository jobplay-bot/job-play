"use client";

interface MainInfoProps {
  jobDescription?: string;
  workingConditions?: string;
  visaSupport?: string;
}

export default function CareersDetailInfo({
  jobDescription,
  workingConditions,
  visaSupport,
}: MainInfoProps) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm mt-4 text-sm text-gray-700 space-y-4">
      {jobDescription && (
        <div>
          <h4 className="font-semibold">📝 담당 업무</h4>
          <p className="whitespace-pre-wrap">
            {jobDescription}
            <br />
          </p>
        </div>
      )}

      {workingConditions && <hr className="my-4 border-gray-200" />}
      {workingConditions && (
        <div>
          <h4 className="font-semibold">💡 우대 조건</h4>
          <pre className="whitespace-pre-wrap">{workingConditions}</pre>
        </div>
      )}

      {visaSupport && <hr className="my-4 border-gray-200" />}
      {visaSupport && (
        <div>
          <h4 className="font-semibold">🎁 비자 지원 여부</h4>
          <p>{visaSupport}</p>
        </div>
      )}
    </div>
  );
}
