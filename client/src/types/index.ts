export type Language = 'en' | 'it';

export interface Project {
  id: number;
  title: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
  image: string;
  technologies: string[];
  link?: string;
}

export interface Section {
  id: string;
  title: {
    en: string;
    it: string;
  };
}
