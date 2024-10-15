import Link from "next/link";

const links = [
  { name: "내 프로필 관리하기", href: "/resumes", icon: null },
  { name: "이력서/포트폴리오 구경하기", href: "/portfolios", icon: null },
  { name: "이력서 보러가기", href: "/portfolios", icon: null },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link href={link.href} key={link.name} className="text-sm">
          {link.name}
        </Link>
      ))}
    </>
  );
}
