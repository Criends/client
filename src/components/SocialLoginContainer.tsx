import GoogleLoginButton from "./GoogleLoginButton";
import KakaoLoginButton from "./KakaoLoginButton";
import NaverLoginButton from "./NaverLoginButton";

export default function SocialLoginContainer() {
  return (
    <div className="flex justify-center gap-2">
      <KakaoLoginButton />
      <NaverLoginButton />
      <GoogleLoginButton />
    </div>
  );
}
