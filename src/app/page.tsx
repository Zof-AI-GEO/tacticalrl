import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  if (!allPosts.length) {
    return null;
  }

  const heroPost = allPosts[0];
  const supportingPosts = allPosts.slice(1);

  const trendingPosts = supportingPosts.slice(0, 3);
  const deepResearchPosts = supportingPosts.slice(3);
  const toolkitHighlights = heroPost?.tags?.slice(0, 4) ?? [];

  const labCollections = [
    {
      title: "Automation Playbooks",
      description:
        "Blueprint your AI-augmented regression suites with guardrails and metrics that scale.",
      cta: "Download frameworks",
      href: "#newsletter",
    },
    {
      title: "Observability Starter",
      description:
        "Instrument test feedback loops with live telemetry and quality scorecards.",
      cta: "Preview dashboards",
      href: "#resources",
    },
    {
      title: "Team Ritual Guides",
      description:
        "Run quality ops rituals that align product, platform, and AI initiatives every sprint.",
      cta: "Join the lab",
      href: "#newsletter",
    },
  ];

  return (
    <main className="pb-32">
      <HeroPost
        title={heroPost.title}
        image={heroPost.image}
        slug={heroPost.slug}
        meta={heroPost.meta}
        tags={heroPost.tags}
        date={heroPost.date}
        readingMinutes={heroPost.readingMinutes}
      />

      <Container>
        {trendingPosts.length > 0 && (
          <section id="trending" className="mt-24 animate-fade-up">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200">
                  Signal boost
                </span>
                <h2 className="section-title">Trending intelligence</h2>
                <p className="section-subtitle">
                  Pulse checks from delivery floors adopting AI co-pilots, rapid
                  experimentation, and observability-led QA.
                </p>
              </div>
              <Link href="#newsletter" className="btn-secondary">
                Get weekly briefings
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {trendingPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_65px_rgba(15,23,42,0.45)] backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between text-xs text-indigo-200">
                    <span className="font-semibold uppercase tracking-[0.3em]">
                      {post.tags?.[0] ?? "Insight"}
                    </span>
                    {post.readingMinutes && (
                      <span>{post.readingMinutes} min read</span>
                    )}
                  </div>
                  <Link href={`/posts/${post.slug}`}>
                    <h3 className="mt-6 font-display text-2xl leading-snug text-white transition-transform group-hover:translate-x-1">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-white/75">
                    {post.meta}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200">
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
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {supportingPosts.length > 0 && <MoreStories posts={supportingPosts} />}

        {deepResearchPosts.length > 0 && (
          <section id="resources" className="mt-24 animate-fade-up">
            <div className="glass-panel border border-white/10 p-8 md:p-12">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200">
                    Lab resources
                  </span>
                  <h2 className="section-title">Deep practice companions</h2>
                  <p className="section-subtitle text-white/75">
                    Pair your squads with structured toolkits, orchestration
                    rituals, and governance guides from the Zof AI collective.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {labCollections.map((collection) => (
                  <div
                    key={collection.title}
                    className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-white/85"
                  >
                    <div className="space-y-4">
                      <h3 className="font-display text-xl text-white">
                        {collection.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/75">
                        {collection.description}
                      </p>
                    </div>
                    <Link
                      href={collection.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-100"
                    >
                      {collection.cta}
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
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </Container>

      <section id="newsletter" className="mt-24 animate-fade-up">
        <div className="mx-auto max-w-6xl rounded-[3rem] border border-white/10 bg-gradient-to-br from-indigo-900 via-slate-950 to-black p-1 shadow-[0_45px_95px_rgba(15,23,42,0.5)]">
          <div className="relative overflow-hidden rounded-[2.9rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl md:p-14">
            <div className="absolute -left-20 -top-10 h-72 w-72 rounded-full bg-indigo-500/40 blur-[120px]" />
            <div className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-purple-500/40 blur-[120px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-indigo-100">
                  Dispatch
                </span>
                <h2 className="mt-5 font-display text-3xl text-white md:text-4xl">
                  Join the bulletin
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                  Every Tuesday: a systems view on continuous quality, curated
                  signals from partner labs, and templates to launch your next
                  experiment.
                </p>

                <form
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                  action="#"
                  method="post"
                >
                  <label className="sr-only" htmlFor="newsletter-email">
                    Email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="yourname@company.com"
                    className="form-field sm:max-w-xs"
                  />
                  <button type="submit" className="btn-primary">
                    Subscribe
                  </button>
                </form>
                <p className="mt-4 text-xs text-white/60">
                  Zero fluff, always tactical. Bonus: launch checklist for
                  AI-assisted QA ceremonies.
                </p>
              </div>

              <div className="glass-panel border border-white/10 p-8 text-sm text-white/80">
                <h3 className="font-display text-xl text-white">
                  This week&apos;s toolkit drops
                </h3>
                <ul className="mt-6 space-y-4">
                  {toolkitHighlights.length > 0 ? (
                    toolkitHighlights.map((tag) => (
                      <li key={tag} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
                        <span className="flex-1 text-sm leading-relaxed text-white/80">
                          {tag}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm leading-relaxed text-white/60">
                      Fresh insights unlock with every dispatch.
                    </li>
                  )}
                </ul>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 text-xs text-white/80">
                  <p>
                    Members gain instant access to the adaptive quality playbook
                    library and live office hours with Zof AI mentors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
