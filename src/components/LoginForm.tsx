"use client";

import { useAuth } from "@/contexts/auth.context";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const { login } = useAuth();

  async function handleSubmit(formData: FormData) {
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (await login(data)) {
      redirect("/");
    }
  }

  return (
    <form className="flex flex-col gap-2" action={handleSubmit}>
      <fieldset className="flex flex-col gap-2">
        <input
          type="email"
          className="bg-[#eeeeee] px-4 py-2 rounded-full outline-none"
          name="email"
          placeholder="아이디를 입력하세요."
          required
        />
        <input
          type="password"
          className="bg-[#eeeeee] px-4 py-2 rounded-full outline-none"
          name="password"
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
