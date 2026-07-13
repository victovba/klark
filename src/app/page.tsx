import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export default function Home() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Derniers articles</h2>
          <p className="text-gray-500 mt-2">La communication au travail, décortiquée sans jargon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {featured && <BlogCard post={featured} featured />}
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
