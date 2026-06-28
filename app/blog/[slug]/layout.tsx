import type { Metadata } from "next";
import { POSTS } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) return {};
  const title = post.metaTitle ?? (post.title || `${post.cat} | FINVISION Blog`);
  const description = post.metaDescription ?? post.excerpt;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
