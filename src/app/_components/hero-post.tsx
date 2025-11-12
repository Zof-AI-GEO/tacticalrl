import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
  tags?: string[];
  date?: string;
  readingMinutes?: number;
};

export function HeroPost({
  title,
  image,
  slug,
  meta,
  tags = [],
  date,
  readingMinutes,
}: Props) {
  const highlightedTags = tags.slice(0, 4);
  const formattedDate = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date))
    : null;

  return (
    <section id="latest" className="mt-12 animate-fade-up">
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-indigo-800 via-slate-900 to-slate-950 p-1 shadow-[0_45px_95px_rgba(15,23,42,0.45)]">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-500/40 blur-[140px]" />
        <div className="absolute -right-10 -top-16 h-60 w-60 rounded-full bg-fuchsia-500/30 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.12),transparent_55%)]" />

        <div className="relative grid gap-12 rounded-[2.9rem] border border-white/10 bg-slate-950/40 px-8 py-12 backdrop-blur-2xl md:px-14 lg:grid-cols-[1.2fr,0.8fr] lg:py-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-indigo-100">
                Spotlight
              </span>
              {formattedDate && (
                <time
                  className="text-xs font-medium uppercase tracking-[0.28em] text-white/70"
                  dateTime={date ?? undefined}
                >
                  {formattedDate}
                </time>
              )}
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                {meta}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/posts/${slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.02]"
              >
                Read the field report
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
                    d="M13 5l7 7-7 7m8-7H4"
                  />
                </svg>
              </Link>
              {typeof readingMinutes === "number" && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
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

            {highlightedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 text-xs font-medium text-indigo-100">
                {highlightedTags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-indigo-200">
                  Why this matters
                </p>
                <p className="text-sm text-white/80">
                  Learn how teams rewire automation suites to co-pilot with
                  generative AI and deliver resilient releases every sprint.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-indigo-200">
                  Lab notes
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Systems thinking for adaptive test coverage</li>
                  <li>• Observability-first quality baselines</li>
                  <li>• Proven playbooks from Zof AI partners</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 right-6 hidden h-32 w-32 animate-float-slow rounded-3xl border border-white/10 bg-white/5 p-5 text-xs text-indigo-100 sm:flex sm:flex-col sm:gap-2">
              <p className="font-semibold uppercase tracking-[0.3em]">Signal</p>
              <p className="text-[0.75rem] leading-relaxed text-white">
                78% of QA leads report AI-assisted regression as their fastest
                ROI this year.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-900/60 shadow-[0_30px_70px_rgba(15,23,42,0.55)]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <CoverImage
                title={title}
                src={image}
                slug={slug}
                aspect="portrait"
              />
            </div>
            <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-sm text-white/80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                  Release health
                </span>
                <span className="text-lg font-semibold text-white">A-</span>
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                Actionable instrumentation, curated test heuristics, and
                real-time governance dashboards to keep launches resilient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
