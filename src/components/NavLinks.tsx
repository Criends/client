import Link from "next/link";

const links = [
  { name: "Resume", href: "/resumes", icon: null },
  { name: "Portfolios", href: "/portfolios", icon: null },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link href={link.href} key={link.name}>
          {link.name}
        </Link>
      ))}
    </>
  );
}
