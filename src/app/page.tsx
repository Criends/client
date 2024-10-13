import Section from "@/components/Section";
import StartGuide from "@/components/StartGuide";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <StartGuide />

      <Section>
        <div className="flex gap-10 my-auto">
          <div className="w-80 h-96 bg-slate-200"></div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl">눈에 띄는 이력서를 준비해보세요.</h2>
              <p>
                Criends에는 종환이가 앞으로 만들어줄 100만개의 이력서 템플릿이
                준비되어 있습니다. 템플릿을 활용하여 눈에 띄는 이력서를 만들고
                관리해보세요.
              </p>
            </div>
            <div className="flex gap-5 justify-end">
              <Link
                href="#"
                className="px-4 py-2 bg-slate-200 rounded-full text-sm"
              >
                이력서 생성하기
              </Link>
              <Link
                href="#"
                className="px-4 py-2 bg-slate-200 rounded-full text-sm"
              >
                템플릿 구경하기
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-row-reverse gap-10 my-auto">
          <div className="w-80 h-96 bg-slate-200"></div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl">
                경쟁력 있는 포트폴리오를 준비해보세요.
              </h2>
              <p>
                Criends에는 종환이가 앞으로 만들어줄 100만개의 포트폴리오
                템플릿이 준비되어 있습니다. 템플릿을 활용하여 눈에 띄는 이력서를
                만들고 관리해보세요.
              </p>
            </div>
            <div className="flex gap-5 justify-start">
              <Link
                href="#"
                className="px-4 py-2 bg-slate-200 rounded-full text-sm"
              >
                포트폴리오 생성하기
              </Link>
              <Link
                href="#"
                className="px-4 py-2 bg-slate-200 rounded-full text-sm"
              >
                템플릿 구경하기
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex gap-10 my-auto">
          <div className="w-80 h-96 bg-slate-200"></div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl">
                다른 이력서와 포트폴리오를 참고해보세요.
              </h2>
              <p>
                Criends에서 작성된 다양한 이력서와 포트폴리오를 구경할 수
                있습니다. 같은 업계의 이력서와 포트폴리오를 구경해보세요. 내가
                만든 이력서와 포트폴리오를 공유할 수 있습니다.
              </p>
            </div>
            <div className="flex gap-5 justify-end">
              <Link
                href="#"
                className="px-4 py-2 bg-slate-200 rounded-full text-sm"
              >
                이력서 보러가기
              </Link>
              <Link
                href="#"
                className="px-4 py-2 bg-slate-200 rounded-full text-sm"
              >
                포트폴리오 보러가기
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
