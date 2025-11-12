"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type ShareActionsProps = {
  title: string;
  slug: string;
  className?: string;
};

const twitterIntent = (url: string, title: string) =>
  `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`;

const linkedinIntent = (url: string, title: string) =>
  `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    url
  )}&title=${encodeURIComponent(title)}`;

export function ShareActions({ title, slug, className }: ShareActionsProps) {
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL &&
      process.env.NEXT_PUBLIC_SITE_URL.length > 0
        ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
        : window.location.origin;
    setShareUrl(`${base}/posts/${slug}`);
  }, [slug]);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleShare = useCallback(
    (target: "twitter" | "linkedin") => {
      if (!shareUrl) return;
      const url =
        target === "twitter"
          ? twitterIntent(shareUrl, title)
          : linkedinIntent(shareUrl, title);
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [shareUrl, title]
  );

  const handleCopy = useCallback(async () => {
    if (!shareUrl) return;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch (error) {
      setCopied(false);
    }
  }, [shareUrl]);

  const isReady = useMemo(() => Boolean(shareUrl), [shareUrl]);

  const containerClass = className
    ? `flex flex-wrap gap-2 ${className}`
    : "flex flex-wrap gap-2";

  return (
    <div className={containerClass}>
      <button
        type="button"
        onClick={() => handleShare("twitter")}
        disabled={!isReady}
        className="btn-secondary px-4 py-2 text-xs"
      >
        Share on Twitter
      </button>
      <button
        type="button"
        onClick={() => handleShare("linkedin")}
        disabled={!isReady}
        className="btn-secondary px-4 py-2 text-xs"
      >
        Share on LinkedIn
      </button>
      <button
        type="button"
        onClick={handleCopy}
        disabled={!isReady}
        className="btn-secondary px-4 py-2 text-xs"
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
