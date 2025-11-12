import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import CoverImage from "@/app/_components/cover-image";

type Props = {
  title: string;
  date?: string;
  meta?: string;
  tags?: string[];
  readingMinutes?: number;
  image?: string;
  slug?: string;
};

export function PostHeader({
  title,
  date,
  meta,
  tags,
  readingMinutes,
  image,
  slug,
}: Props) {
  return (
    <div className="animate-fade-up space-y-10 text-white">
      {image && (
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_70px_rgba(15,23,42,0.45)]">
          <CoverImage title={title} src={image} slug={slug} aspect="video" />
        </div>
      )}

      <div className="space-y-6">
        <PostTitle>{title}</PostTitle>

        {meta && (
          <p className="text-lg leading-relaxed text-white/80 md:text-xl">
            {meta}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-100">
          {date && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.65rem] text-indigo-100">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <DateFormatter dateString={date} />
            </span>
          )}
          {typeof readingMinutes === "number" && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.65rem] text-indigo-100">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {readingMinutes} min read
            </span>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tag-chip">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}
