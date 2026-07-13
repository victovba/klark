'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import GlassCard from './GlassCard';
import type { BlogPost } from '@/types';

interface Props {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured }: Props) {
  return (
    <TiltCard intensity={6} className={featured ? 'md:col-span-2' : ''}>
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <GlassCard as="article" className="h-full p-6 hover:shadow-xl hover:shadow-blue-100/50 transition-shadow duration-500 group">
          <div className={`h-2 rounded-full mb-5 bg-gradient-to-r ${post.coverGradient}`} />

          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-[#00A8FF]/10 to-[#70A1FF]/10 text-[#00A8FF]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className={`font-semibold text-gray-900 group-hover:text-[#00A8FF] transition-colors duration-300 ${featured ? 'text-xl' : 'text-lg'}`}>
            {post.title}
          </h3>

          <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#00A8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Lire l&apos;article
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </GlassCard>
      </Link>
    </TiltCard>
  );
}
