import { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — Klar",
  description: "Articles sur la communication professionnelle, le feedback constructif et la productivité d'équipe.",
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-900">Blog</h1>
        <p className="text-gray-500 mt-2 max-w-lg mx-auto">
          La communication au travail, le management et la productivité — sans bullshit, avec des exemples concrets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
