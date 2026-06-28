import { notFound } from "next/navigation";
import PageWrapper from "@/components/layout/PageWrapper";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { POSTS } from "@/lib/data";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.id }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) notFound();
  return (
    <PageWrapper page="blog">
      <BlogPostContent post={post} />
    </PageWrapper>
  );
}
