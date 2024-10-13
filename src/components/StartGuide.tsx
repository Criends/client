export default function StartGuide() {
  return (
    <div className="min-h-screen py-44 flex flex-col text-center bg-slate-300 relative">
      <div className="absolute inset-0 flex justify-center items-center">
        {/* <div className="w-[1100px] h-[600px] mb-52 bg-brand rounded-md opacity-50 blur-3xl"></div> */}
        <div className="w-0 h-0 border-brand border-x-[600px] border-t-[600px] border-transparent border-t-brand opacity-50 blur-3xl"></div>
      </div>
      <div className="relative">
        <h1 className="text-5xl font-semibold">
          Criends에서 당신의 이야기를 완성하세요!
        </h1>
        <p className="pt-14">
          Criends에서는 종환이가 만든 200만개의 템플릿이 준비되어 있습니다.
          <br />
          눈에 띄는 이력서와 포트폴리오를 준비해보세요!
        </p>
        <div className="pt-14 flex justify-center gap-5 text-sm">
          <button className="px-4 py-2 bg-slate-200 rounded-full">
            Criends와 함께하기
          </button>
          <button className="px-4 py-2 bg-slate-200 rounded-full">
            Criends 둘러보기
          </button>
        </div>
      </div>
    </div>
  );
}
