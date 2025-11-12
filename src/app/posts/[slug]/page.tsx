import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { ShareActions } from "@/app/_components/share-actions";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <article className="mx-auto mt-8 max-w-4xl pb-24 text-white">
          <PostHeader
            title={post.title}
            date={post.date}
            meta={post.meta}
            tags={post.tags}
            readingMinutes={post.readingMinutes}
            image={post.image}
            slug={post.slug}
          />
          <div className="mt-12 space-y-12">
            <PostBody content={content} />

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-5 text-white/90">
              <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-100">
                Share this story
              </h3>
              <p className="mt-3 text-sm text-white/75">
                Found this valuable? Pass it along to your team and keep the
                conversation moving.
              </p>
              <ShareActions
                title={post.title}
                slug={post.slug}
                className="mt-4"
              />
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    description: post.meta,
    keywords: post.keywords,
    openGraph: {
      title,
      description: post.meta,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
