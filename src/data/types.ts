export type ImageAsset = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

export type PressCategory =
  | "News"
  | "Announcements"
  | "Research"
  | "Partnerships";

export type PressArticle = {
  slug: string;
  category: PressCategory;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  image: ImageAsset;
};

export type Partner = { name: string };

export type TeamMember = {
  name: string;
  role: string;
  image: ImageAsset;
};

export type JobOpening = {
  title: string;
  location: string;
  type: string;
  description: string;
};

export type TechnologyStep = {
  id: string;
  number: string;
  title: string;
  text: string;
  image: ImageAsset;
};
