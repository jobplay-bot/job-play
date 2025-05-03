import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function MyPageForm() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-center mb-6">마이 페이지</h1>

      <Card 
        className="mb-6" 
      >
        <CardContent className="flex items-start gap-4 p-4 ">
          <div className="w-20 h-20 bg-gray-200 rounded" />
          <div className="flex-1 space-y-1 text-sm">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">사진 업로드</Button>
              <Button variant="destructive" size="sm">사진 삭제</Button>
            </div>
            <div className="text-gray-500">  SVG, JPG, PNG 파일만 가능합니다. <br />
            권장 크기: 100px × 100px</div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div>
          <Label>이름*</Label>
          <Input placeholder="이름을 입력해 주세요." />
        </div>

        <div>
          <Label>생년월일*</Label>
          <Input placeholder="YYYY.MM.DD" />
        </div>

        <div>
          <Label>성별*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="성별을 선택해 주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">남성</SelectItem>
              <SelectItem value="female">여성</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>국적*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="국적을 선택해 주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="korea">대한민국</SelectItem>
              <SelectItem value="usa">미국</SelectItem>
              <SelectItem value="japan">일본</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>핸드폰 번호*</Label>
          <Input placeholder="핸드폰 번호를 입력해 주세요." />
        </div>

        <div>
          <Label>거주지역*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="거주 지역을 선택해 주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="seoul">서울</SelectItem>
              <SelectItem value="busan">부산</SelectItem>
              <SelectItem value="daegu">대구</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>이메일*</Label>
          <Input placeholder="이메일을 입력해 주세요." />
        </div>

        <Button className="w-full mt-4">저장 하기</Button>
      </div>
    </div>
  );
}
