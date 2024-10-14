import Section from "@/components/Section";
import StartGuide from "@/components/StartGuide";

export default function Home() {
  return (
    <div>
      <StartGuide />

      {/* 이력서 안내 섹션 */}
      <Section
        title="눈에 띄는 이력서를 준비해보세요."
        description="Criends에는 종환이가 앞으로 만들어줄 100만개의 이력서 템플릿이
        준비되어 있습니다. 템플릿을 활용하여 눈에 띄는 이력서를 만들고
        관리해보세요."
        link1={{ href: "#", label: "이력서 생성하기" }}
        link2={{ href: "#", label: "템플릿 구경하기" }}
      />

      {/* 포트폴리오 안내 섹션 */}
      <Section
        title="눈에 띄는 포트폴리오를 준비해보세요."
        description="Criends에는 종환이가 앞으로 만들어줄 100만개의 포트폴리오
        템플릿이 준비되어 있습니다. 템플릿을 활용하여 눈에 띄는 이력서를
        만들고 관리해보세요"
        link1={{ href: "#", label: "포트폴리오 생성하기" }}
        link2={{ href: "#", label: "템플릿 구경하기" }}
      />

      {/* 게시판 안내 섹션 */}
      <Section
        title="다른 이력서와 포트폴리오를 참고해보세요."
        description="Criends에서 작성된 다양한 이력서와 포트폴리오를 구경할 수
        있습니다. 같은 업계의 이력서와 포트폴리오를 구경해보세요. 내가
        만든 이력서와 포트폴리오를 공유할 수 있습니다."
        link1={{ href: "#", label: "이력서 보러가기" }}
        link2={{ href: "#", label: "포트폴리오 보러가기" }}
      />
    </div>
  );
}
