import Image from "next/image";
import naverSymbol from "@/public/naver_symbol.png";
import SocialLoginButtonWrapper from "./SocialLoginButtonWrapper";

export default function NaverLoginButton() {
  return (
    <SocialLoginButtonWrapper>
      <Image
        src={naverSymbol}
        fill
        alt="Kakao Login"
        className="cursor-pointer"
      />
    </SocialLoginButtonWrapper>
  );
}
