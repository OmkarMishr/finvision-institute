export type PageName = "home" | "about" | "courses" | "blog" | "centers" | "contact";

export type CoursePlan = {
  id: string;
  name: string;
  tag: string;
  duration: string;
  price: number;
  originalPrice: number;
  discount: string;
  features: string[];
  featured?: boolean;
};

export type BlogBodyItem = string | { img: string; alt: string };

export type Post = {
  id: string;
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  author: string;
  date: string;
  body: BlogBodyItem[];
  image?: string;
  subtitle?: string;
};
