import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  aspect?: "video" | "square" | "portrait";
};

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
} as const;

const CoverImage = ({ title, src, slug, aspect = "video" }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        "h-full w-full object-cover transition-transform duration-700",
        {
          "transition-transform duration-500": slug,
        }
      )}
      width={1300}
      height={630}
    />
  );
  return (
    <div className={cn("relative w-full overflow-hidden", aspectMap[aspect])}>
      {slug ? (
        <Link
          href={`/posts/${slug}`}
          aria-label={title}
          className="block w-full h-full"
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
