import Link from "next/link";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <header className="h-20 w-full text-nowrap fixed z-20 backdrop-blur-sm drop-shadow-sm shadow-sm px-10 py-5 md:px-20 lg:px-32 xl:px-40">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-20">
          <Link
            href="/"
            className="p-1 rounded-md hover:backdrop-blur-sm hover:drop-shadow-sm text-2xl font-semibold tracking-tighter uppercase text-brand"
          >
            Criends
          </Link>

          <nav className="hidden lg:flex lg:gap-10 xl:flex xl:gap-20 2xl:flex">
            <NavLinks />
          </nav>
        </div>
        <AuthButtons />
      </div>
    </header>
  );
}
