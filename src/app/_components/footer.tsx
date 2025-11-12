import { EXAMPLE_PATH } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32">
      <div className="mx-auto max-w-6xl rounded-[3rem] border border-white/10 bg-white/[0.04] p-1 shadow-[0_35px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
        <div className="rounded-[2.9rem] border border-white/10 bg-slate-950/70 px-10 py-12 text-white/85 md:px-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md space-y-4">
              <p className="font-display text-2xl font-semibold text-white">
                ZofPulse Journal
              </p>
              <p className="text-sm leading-relaxed text-white/75">
                Playbooks, experiments, and operating models for adaptive QA
                teams building with intelligence-first workflows.
              </p>
              <Link
                href="#newsletter"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200"
              >
                Join the Observatory
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

            <nav className="grid grid-cols-2 gap-10 text-sm text-white/75">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200">
                  Explore
                </p>
                <Link
                  href="#latest"
                  className="transition-colors hover:text-white"
                >
                  Latest signal
                </Link>
                <Link
                  href="#trending"
                  className="transition-colors hover:text-white"
                >
                  Trending intel
                </Link>
                <Link
                  href="#deep-dives"
                  className="transition-colors hover:text-white"
                >
                  Deep research
                </Link>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200">
                  Resources
                </p>
                <a
                  href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                  className="transition-colors hover:text-white"
                >
                  Source template
                </a>
                <a
                  href="https://nextjs.org/docs"
                  className="transition-colors hover:text-white"
                >
                  Next.js docs
                </a>
                <a
                  href="mailto:hello@qaobservatory.com"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-6 text-xs text-white/60 md:grid-cols-2">
            <p>© {year} ZofPulse. Crafted in partnership with Zof AI labs.</p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
