import clsx from "clsx";
import Link from "next/link";

interface SectionProps {
  reverse?: boolean;
  title: string;
  description: string;
  link1: { href: string; label: string };
  link2: { href: string; label: string };
}

export default function StartSection({
  reverse,
  title,
  description,
  link1,
  link2,
}: SectionProps) {
  return (
    <section className="w-full py-14 my-14 flex justify-center">
      <div
        className={clsx("w-full flex flex-col md:flex-row gap-10 my-auto", {
          "md:flex-row-reverse": reverse,
        })}
      >
        <div className="w-full md:w-1/2 bg-slate-200">
          <div className="aspect-w-16 aspect-h-9 bg-slate-400 rounded-lg h-[400px]"></div>
        </div>
        <div className="w-full h-full md:w-1/2 flex flex-col justify-between md:h-[400px]">
          <div className="flex flex-col gap-5 h-full">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="overflow-y-auto pr-2 max-h-[200px] md:max-h-none">
              <p className="text-base">{description}</p>
            </div>
          </div>
          <div
            className={clsx(`mt-5 flex gap-5 justify-end text-sm`, {
              "md:justify-start": reverse,
            })}
          >
            <Link
              href={link1.href}
              className="px-4 py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all"
            >
              {link1.label}
            </Link>
            <Link
              href={link2.href}
              className="px-4 py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all"
            >
              {link2.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
