import Image from "next/image";
import kakaoLoginImg from "@/public/kakao_symbol.png";
import SocialLoginButtonWrapper from "./SocialLoginButtonWrapper";

export default function KakaoLoginButton() {
  return (
    <SocialLoginButtonWrapper>
      <Image
        src={kakaoLoginImg}
        fill
        alt="Kakao Login"
        className="cursor-pointer"
      />
    </SocialLoginButtonWrapper>
  );
}
