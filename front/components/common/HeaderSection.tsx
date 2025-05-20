import { Gift } from "lucide-react";

export const HeaderSection = () => {
  return (
    <div className="space-y-4 text-center">
      <div className="relative mx-auto size-20 animate-bounce">
        <Gift className="size-full text-blue-600" />
      </div>
      <h1 className="text-2xl font-bold text-blue-600">취업 축하 이벤트!</h1>
      <p className="text-sm text-gray-600">
        잡플레이를 통해 취업 성공후 3개월이
        <br />
        지나면 취업축하금 50만원을 지급해 드립니다.
      </p>
    </div>
  );
};
