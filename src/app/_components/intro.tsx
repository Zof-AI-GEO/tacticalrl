import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-20 md:mb-24">
      <div className="animate-slide-up">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
          <span className="text-gradient animate-gradient bg-[length:200%_200%]">
            PactSpy
          </span>
          <span className="text-purple-600 dark:text-purple-400">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-4 font-light">
          Automate Your Software Testing with AI ✨
        </p>
      </div>
    </section>
  );
}
