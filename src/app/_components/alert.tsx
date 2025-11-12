import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-ink-900 text-sand-50 border-ink-900": preview,
        "bg-sand-100/80 text-ink-700 border-sand-200/70": !preview,
      })}
    >
      <Container>
        <div className="py-3 text-center text-sm font-medium">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline transition-colors duration-200 hover:text-rust"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline transition-colors duration-200 hover:text-rust"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
