import Link from "next/link";

export default function NavRail() {
  const items = [
    {
      href: "/",
      label: "Home",
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.5l9-7 9 7V20a2 2 0 01-2 2h-4a2 2 0 01-2-2v-5H9v5a2 2 0 01-2 2H5a2 2 0 01-2-2V9.5z"
          />
        </svg>
      ),
    },
    {
      href: "#deep-dives",
      label: "Explore",
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m9-9H3"
          />
        </svg>
      ),
    },
    {
      href: "#newsletter",
      label: "Newsletter",
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm0 0l8 7 8-7"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside className="hidden lg:flex h-svh sticky top-0 flex-col justify-between border-r border-sand-200/80 bg-white/85 px-5 py-8 backdrop-blur-md dark:border-ink-700/60 dark:bg-ink-800/70">
      <div className="space-y-6">
        <Link
          href="/"
          className="block font-display text-2xl font-semibold tracking-tight text-ink-800 dark:text-slate-100"
        >
          uni<span className="text-rust-600">4e</span>
        </Link>

        <div className="space-y-2">
          <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-400 dark:text-slate-500">
            Menu
          </p>
          <nav className="space-y-1 text-sm font-medium text-white/80">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-sand-100 dark:hover:bg-ink-700/60"
              >
                <span className="text-ink-500 dark:text-slate-400">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="space-y-3 rounded-xl border border-sand-200 bg-white p-4 shadow-sm dark:border-ink-700/60 dark:bg-ink-800/60">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-400 dark:text-slate-500">
          Weekly Dispatch
        </p>
        <p className="text-sm text-white/80">
          Curated insights on testing and delivery.
        </p>
        <Link
          href="#newsletter"
          className="inline-flex w-full items-center justify-center rounded-full bg-rust-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rust-500"
        >
          Subscribe
        </Link>
      </div>
    </aside>
  );
}
