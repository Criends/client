"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth.context";
import { User } from "react-feather";

export default function AuthButtons() {
  const { isAuthenticated, logout } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="flex gap-3 px-[0.65rem] py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all items-center duration-300 ease-in-out overflow-hidden w-10 hover:w-24 animate-pulse">
        <User size={20} className="flex-shrink-0" />
        <span>Check</span>
      </div>
    );

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href="/login"
          // 이전 버전: className="flex gap-2 px-4 py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all items-center"
          className="flex gap-3 px-[0.65rem] py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all items-center duration-300 ease-in-out overflow-hidden w-10 hover:w-24"
        >
          <User size={20} className="flex-shrink-0" />
          <span className="whitespace-nowrap">Login</span>
        </Link>
      ) : (
        <button
          // 이전 버전: className="flex gap-2 px-4 py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all items-center"
          className="flex gap-3 px-[0.65rem] py-2 bg-brand text-white hover:bg-red-500 hover:text-white rounded-full transition-all items-center duration-300 ease-in-out overflow-hidden w-10 hover:w-[6.5rem]"
          onClick={logout}
        >
          <User size={20} className="flex-shrink-0" />
          <span className="whitespace-nowrap">Logout</span>
        </button>
      )}
    </>
  );
}
