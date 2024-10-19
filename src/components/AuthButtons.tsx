"use client";

import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";
import { User } from "react-feather";

export default function AuthButtons() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href="/login"
          className="flex gap-2 px-4 py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all items-center"
        >
          <User size={20} />
          <span>Login</span>
        </Link>
      ) : (
        <button
          className="flex gap-2 px-4 py-2 bg-brand text-white hover:bg-slate-200 hover:text-brand rounded-full transition-all items-center"
          onClick={logout}
        >
          <User size={20} />
          <span>Logout</span>
        </button>
      )}
    </>
  );
}
