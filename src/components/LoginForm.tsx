"use client";

import { loginApi } from "@/api/auth.api";

export default function LoginForm() {
  async function login(formData: FormData) {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("유효하지 않은 이메일 형식입니다.");
      return;
    }

    await loginApi(email, password)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <form className="flex flex-col gap-2" action={login}>
      <fieldset className="flex flex-col gap-2">
        <input
          type="email"
          className="bg-[#eeeeee] px-4 py-2 rounded-full outline-none"
          name="email"
        />
        <input
          type="password"
          className="bg-[#eeeeee] px-4 py-2 rounded-full outline-none"
          name="password"
        />
      </fieldset>
      <button className="bg-brand w-full px-2 py-2 rounded-full text-white">
        로그인
      </button>
    </form>
  );
}
