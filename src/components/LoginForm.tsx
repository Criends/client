"use client";

export default function LoginForm() {
  return (
    <form
      className="flex flex-col gap-2 text-brand"
      onSubmit={(event) => event.preventDefault()}
    >
      <fieldset className="flex flex-col gap-2">
        <input
          type="email"
          className="bg-[#eeeeee] px-4 py-2 rounded-full outline-none"
          placeholder="아이디를 입력하세요."
          required
        />
        <input
          type="password"
          className="bg-[#eeeeee] px-4 py-2 rounded-full outline-none"
          placeholder="비밀번호를 입력하세요."
          required
        />
      </fieldset>
      <button className="bg-brand w-full px-2 py-2 rounded-full text-white">
        로그인
      </button>
    </form>
  );
}
