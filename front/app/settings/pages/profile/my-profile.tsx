import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { countryList } from "@/const/countryList";
import { KoreaRegionSelect } from "@/components/molecule/addressSelect";

export default function MyPageForm() {
  return (
    <div className="mx-auto w-full max-w-xl rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-6 text-center text-xl font-bold">마이 페이지</h1>

      <Card className="mb-6">
        <CardContent className="flex items-start gap-4 p-4 ">
          <div className="size-20 rounded bg-gray-200" />
          <div className="flex-1 space-y-1 text-sm">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                사진 업로드
              </Button>
              <Button variant="destructive" size="sm">
                사진 삭제
              </Button>
            </div>
            <div className="text-gray-500">
              {" "}
              SVG, JPG, PNG 파일만 가능합니다. <br />
              권장 크기: 100px × 100px
            </div>
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
              {countryList.map((country, index) => {
                const koreanName = Object.keys(
                  country,
                )[0] as keyof typeof country;
                const englishName = country[koreanName] as string;
                return (
                  <SelectItem
                    key={index}
                    value={englishName.toLowerCase().replace(/ /g, "-")}
                  >
                    {koreanName}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>핸드폰 번호*</Label>
          <Input placeholder="핸드폰 번호를 입력해 주세요." />
        </div>

        <div>
          <Label>거주지역*</Label>
          <KoreaRegionSelect />
        </div>

        <div>
          <Label>이메일*</Label>
          <Input placeholder="이메일을 입력해 주세요." />
        </div>

        <Button className="mt-4 w-full">저장 하기</Button>
      </div>
    </div>
  );
}
