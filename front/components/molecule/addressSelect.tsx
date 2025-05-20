"use client";

import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'; // Shadcn UI Select 컴포넌트 경로에 맞게 수정
import { koreaRegions } from '@/const/koreaAddresList'; // 지역 데이터 경로에 맞게 수정

export const KoreaRegionSelect = () => {
  const [selectedCity, setSelectedCity] = useState<keyof typeof koreaRegions | ''>('');
  const [selectedGu, setSelectedGu] = useState('');

  const cities = Object.keys(koreaRegions) as (keyof typeof koreaRegions)[];
  const guOptions = selectedCity ? koreaRegions[selectedCity] : [];

  const handleCityChange = (city: keyof typeof koreaRegions) => {
    setSelectedCity(city);
    setSelectedGu(''); // 시가 변경되면 구 선택 초기화
  };

  const handleGuChange = (gu: string) => {
    setSelectedGu(gu);
  };

  return (
    <div>
      <div className="mb-4">
        <Select value={selectedCity} onValueChange={handleCityChange}>
          <SelectTrigger className="w-[200px]">
            {selectedCity || '시/도 선택'}
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select value={selectedGu} onValueChange={handleGuChange} disabled={!selectedCity}>
          <SelectTrigger className="w-[200px]">
            {selectedGu || '구/군 선택'}
          </SelectTrigger>
          <SelectContent>
            {guOptions.map((gu) => (
              <SelectItem key={gu} value={gu}>{gu}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedCity && selectedGu && (
        <p className="mt-4">선택된 거주 지역: {selectedCity} {selectedGu}</p>
      )}
    </div>
  );
};

export default KoreaRegionSelect;