import Image from "next/image";
import googleSymbol from "@/public/google_symbol.png";
import SocialLoginButtonWrapper from "./SocialLoginButtonWrapper";

export default function GoogleLoginButton() {
  return (
    <SocialLoginButtonWrapper>
      <Image
        src={googleSymbol}
        fill
        alt="Google Login"
        className="cursor-pointer"
      />
    </SocialLoginButtonWrapper>
  );
}
