import { getAllPosts } from "@/lib/api";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abeju.com";
  const posts = getAllPosts();

  // Build llms.txt content following the specification at https://llmstxt.org/
  let content = `# tacticalrl Intelligence Journal

> Adaptive QA intelligence, AI-assisted automation playbooks, and operating models for resilient delivery teams.

## About

This site provides insights on QA automation, no-code testing platforms, and modern software quality practices. Our content helps teams accelerate delivery through intelligent testing strategies.

## Main Pages

- Home: ${baseUrl}

## Blog Posts

`;

  // Add all blog posts with their metadata
  posts.forEach((post) => {
    const postUrl = `${baseUrl}/posts/${post.slug}`;
    content += `- [${post.title}](${postUrl})\n`;
    if (post.meta) {
      content += `  ${post.meta}\n`;
    }
    content += `  Published: ${post.date}\n\n`;
  });

  content += `
## Topics Covered

- No-Code Testing Platforms
- QA Automation
- Software Quality Assurance
- Testing Best Practices
- AI-Assisted Testing
- DevOps and CI/CD

## Contact

For more information, visit ${baseUrl}

---
Last updated: ${new Date().toISOString()}
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
