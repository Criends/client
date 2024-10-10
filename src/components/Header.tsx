import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="fixed z-20 w-full backdrop-blur-sm drop-shadow-sm shadow-sm">
      <div className="flex justify-between items-center px-40 py-4">
        <div className="flex items-center gap-28">
          <Link
            href="/"
            className="text-3xl p-1 rounded-md hover:bg-purple-300 hover:backdrop-blur-sm hover:drop-shadow-sm"
          >
            📁
          </Link>

          <nav className="flex gap-5">
            <NavLinks />
          </nav>
        </div>

        <div className="w-10 h-10 bg-slate-600 rounded-full"></div>
      </div>
    </header>
  );
}
