import Link from "next/link";
import NavLinks from "./NavLinks";
import { User } from "react-feather";

export default function Header() {
  return (
    <header className="h-20 w-full text-nowrap fixed z-20 backdrop-blur-sm drop-shadow-sm shadow-sm px-40 py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-28">
          <Link
            href="/"
            className="p-1 rounded-md hover:backdrop-blur-sm hover:drop-shadow-sm text-2xl font-semibold tracking-tighter uppercase text-brand"
          >
            Criends
          </Link>

          <nav className="flex gap-20">
            <NavLinks />
          </nav>
        </div>

        <Link
          href="/login"
          className="px-4 py-2 bg-slate-200 rounded-full flex gap-1 items-center justify-center hover:border hover:bg-brand hover:text-white transition-all"
        >
          <User size={20} />
          <span>Login</span>
        </Link>
      </div>
    </header>
  );
}
