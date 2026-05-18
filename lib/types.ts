export type PageName = "home" | "about" | "courses" | "blog" | "centers" | "contact";

export type Post = {
  id: string;
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  author: string;
  date: string;
  body: string[];
  image?: string;
  subtitle?: string;
};
