"use client";

import { loginApi } from "@/api/auth.api";
import { createContext, useContext, useState } from "react";

export type LoginData = {
  email: string;
  password: string;
};

interface AuthContextType {
  username: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (data: LoginData) => Promise<boolean>;
  logout: () => void;
}

const initialAuthContext: AuthContextType = {
  username: null,
  token: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(data: LoginData): Promise<boolean> {
    try {
      const { email, password } = data;

      if (!email || !password) return false;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.error("유효하지 않은 이메일 형식입니다.");
        return false;
      }

      const response = await loginApi(email, password);

      if (response.data && response.data.accessToken) {
        setIsAuthenticated(true);
        setUsername(email.split("@")[0]);
        setToken(response.data.accessToken);
        return true;
      } else {
        console.error("로그인 응답에 accessToken이 없습니다.");
        return false;
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      logout();
      return false;
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  const value: AuthContextType = {
    username,
    token,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
