"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        `w-full h-52 bg-brand text-lg text-white text-center pt-10`,
        {
          "absolute bottom-0": pathname === "/login",
        }
      )}
    >
      Criends는 여러분들의 친구입니다.
    </div>
  );
}
