import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="fixed z-20 w-full backdrop-blur-sm drop-shadow-sm shadow-sm px-40 py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-28">
          <Link
            href="/"
            className="p-1 rounded-md hover:backdrop-blur-sm hover:drop-shadow-sm text-2xl font-semibold tracking-tighter uppercase"
          >
            Criends
          </Link>

          <nav className="flex gap-20">
            <NavLinks />
          </nav>
        </div>

        <div className="w-20 py-2 bg-slate-200 rounded-full flex items-center justify-center">
          login
        </div>
      </div>
    </header>
  );
}
