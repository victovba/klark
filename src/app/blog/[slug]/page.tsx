import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { posts, getPostBySlug } from "@/data/posts";
import type { ContentBlock } from "@/types";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Klar`,
    description: post.excerpt,
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className="text-xl font-semibold text-gray-900 mt-10 mb-4">{block.text}</h2>;
    case 'h3':
      return <h3 key={i} className="text-lg font-semibold text-gray-800 mt-8 mb-3">{block.text}</h3>;
    case 'p':
      return <p key={i} className="text-gray-600 leading-relaxed mb-4">{block.text}</p>;
    case 'blockquote':
      return (
        <blockquote key={i} className="border-l-4 border-[#00A8FF] pl-5 py-2 my-6 bg-blue-50/50 rounded-r-xl italic text-gray-600 leading-relaxed">
          {block.text}
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={i} className="space-y-2 my-4">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] mt-2.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i} className="space-y-2 my-4 list-decimal list-inside text-gray-600 leading-relaxed">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    case 'tip':
      return (
        <div key={i} className="bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200/50 rounded-xl p-5 my-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">💡 Astuce</span>
          <p className="text-gray-600 leading-relaxed mt-1">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Retour au blog
      </Link>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-[#00A8FF]/10 to-[#70A1FF]/10 text-[#00A8FF]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <p className="text-gray-500 mt-4 text-lg leading-relaxed border-l-4 border-gray-200 pl-4">
          {post.excerpt}
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8" />

      <article className="prose-custom">
        {post.content.map((block, i) => renderBlock(block, i))}
      </article>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12" />

      <div className="text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#00A8FF] hover:text-[#70A1FF] transition-colors"
        >
          <ArrowLeft size={14} />
          Voir tous les articles
        </Link>
      </div>
    </div>
  );
}
