"use client";

import { redirect } from "next/navigation";
import { LoginData, useAuth } from "@/contexts/auth.context";
import { ChangeEvent, useEffect, useState } from "react";
import clsx from "clsx";

export default function LoginForm() {
  const { login } = useAuth();
  const [{ email, password }, setEnteredValue] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [dynamicErrorMsg, setDynamicErrorMsg] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    // setEnteredValue({ email: "", password: "" }); // 선택
    setDynamicErrorMsg(null);

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (await login(data)) {
      redirect("/");
    } else {
      setDynamicErrorMsg("아이디 또는 비밀번호를 확인해주세요.");
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredValue((prevEnteredValue) => ({
      ...prevEnteredValue,
      [event.target.name]: event.target.value,
    }));
  }

  useEffect(() => {
    if (email || password) {
      setDynamicErrorMsg(null);
    }
  }, [email, password]);

  return (
    <form className="flex flex-col gap-2" action={handleSubmit}>
      <div className="w-full h-10">
        {dynamicErrorMsg && (
          <p className="text-center text-red-500 text-sm mb-2">
            {dynamicErrorMsg}
          </p>
        )}
      </div>
      <fieldset className="flex flex-col gap-2">
        <input
          type="email"
          className={clsx(`bg-[#eeeeee] px-4 py-2 rounded-full outline-none`, {
            "border border-red-500": dynamicErrorMsg,
          })}
          name="email"
          placeholder="아이디를 입력하세요."
          required
          value={email}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="password"
          className={clsx(`bg-[#eeeeee] px-4 py-2 rounded-full outline-none`, {
            "border border-red-500": dynamicErrorMsg,
          })}
          name="password"
          placeholder="비밀번호를 입력하세요."
          required
          value={password}
          onChange={(event) => handleChange(event)}
        />
      </fieldset>
      <button className="bg-brand w-full px-2 py-2 rounded-full text-white">
        로그인
      </button>
    </form>
  );
}
