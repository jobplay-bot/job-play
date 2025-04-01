export interface Location {
  city: string;
  district: string;
}

export interface KoreanLanguage {
  level: string;
  description: string;
}

export interface ForeignLanguage {
  language: string;
  proficiency: string;
  description: string;
}

export interface JobDetail {
  title: string;
  description: string;
  jobType: string[];
  salary: number;
  location: Location;
  visaRequirements: string[];
  koreanLanguage: KoreanLanguage;
  foreignLanguages: ForeignLanguage[];
}
