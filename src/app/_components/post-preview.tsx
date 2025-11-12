import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
  date?: string;
  tags?: string[];
  readingMinutes?: number;
  variant?: "feature" | "standard";
};

export function PostPreview({
  title,
  image,
  slug,
  meta,
  date,
  tags = [],
  readingMinutes,
  variant = "standard",
}: Props) {
  const primaryTag = tags[0];
  const formattedDate = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date))
    : null;
  const isFeature = variant === "feature";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-[0_30px_70px_rgba(15,23,42,0.45)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <CoverImage
          slug={slug}
          title={title}
          src={image}
          aspect={isFeature ? "portrait" : "square"}
        />
        {primaryTag && (
          <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-indigo-100">
            {primaryTag}
          </span>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-8 pt-6 text-white/80">
        {formattedDate && (
          <time
            className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-indigo-200"
            dateTime={date}
          >
            {formattedDate}
          </time>
        )}

        <h3
          className={
            isFeature
              ? "mt-3 font-display text-3xl leading-snug text-white transition-transform group-hover:translate-x-1"
              : "mt-3 font-display text-2xl leading-snug text-white transition-transform group-hover:translate-x-1"
          }
        >
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h3>

        <p
          className={
            isFeature
              ? "mt-4 line-clamp-5 text-sm leading-relaxed text-white/80 md:text-base"
              : "mt-4 line-clamp-4 text-sm leading-relaxed text-white/80"
          }
        >
          {meta}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-indigo-200">
          <Link
            href={`/posts/${slug}`}
            className="inline-flex items-center gap-2"
          >
            Continue
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          {typeof readingMinutes === "number" && (
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-200/80">
              {readingMinutes} min
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
