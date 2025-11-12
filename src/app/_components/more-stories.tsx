import { Post } from "@/interfaces/post";
import Link from "next/link";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  if (!posts.length) {
    return null;
  }

  const featurePosts = posts.slice(0, Math.min(posts.length, 6));

  return (
    <section id="deep-dives" className="mt-24 animate-fade-up">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200">
            Deep research
          </span>
          <h2 className="section-title text-balance">
            Research memos and field-tested experiments
          </h2>
        </div>
        <Link href="#newsletter" className="btn-secondary">
          Send me the lab notes
        </Link>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featurePosts.map((post, idx) => {
          const isFeature = idx === 0 || idx === 3;
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              image={post.image}
              slug={post.slug}
              meta={post.meta}
              date={post.date}
              tags={post.tags}
              readingMinutes={post.readingMinutes}
              variant={isFeature ? "feature" : "standard"}
            />
          );
        })}
      </div>
    </section>
  );
}
