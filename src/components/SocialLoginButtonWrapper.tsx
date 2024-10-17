export default function SocialLoginButtonWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-10 h-10 relative">{children}</div>;
}
