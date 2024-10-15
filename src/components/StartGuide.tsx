import Link from "next/link";

export default function StartGuide() {
  return (
    <div className="mt-[5rem] px-10 md:px-0 py-44 flex flex-col text-center bg-slate-300 relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[450px] h-[450px] bg-brand rounded-full opacity-50 blur-3xl"></div>
        {/* <div className="w-0 h-0 border-brand border-x-[600px] border-t-[600px] border-transparent border-t-brand opacity-50 blur-3xl"></div> */}
      </div>
      <div className="relative">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:4xl font-semibold text-white">
          <pre className="text-brand inline-block tracking-tighter uppercase bg-white px-2 rounded-lg mr-2 hover:scale-110 transition-all hover:-rotate-2 cursor-pointer">
            Criends
          </pre>
          에서 당신의 이야기를 완성하세요!
        </h1>
        <p className="pt-14 text-sm md:text-base">
          Criends에서는 종환이가 만든 200만개의 템플릿이 준비되어 있습니다.
          <br />
          눈에 띄는 이력서와 포트폴리오를 준비해보세요!
        </p>
        <div className="pt-14 flex flex-col md:flex-row justify-center gap-5 text-sm">
          <Link
            href="/"
            className="px-4 py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all"
          >
            Criends와 함께하기
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all"
          >
            Criends 둘러보기
          </Link>
        </div>
      </div>
    </div>
  );
}
