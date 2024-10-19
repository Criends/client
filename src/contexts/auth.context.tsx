"use client";

import { apiClient } from "@/api/apiClient";
import { loginApi } from "@/api/auth.api";
import { createContext, useContext, useEffect, useState } from "react";

export type LoginData = {
  email: string;
  password: string;
};

interface AuthContextType {
  isAuthenticated: boolean;
  errorMessage: string | null;
  login: (data: LoginData) => Promise<boolean>;
  logout: () => void;
}

const initialAuthContext: AuthContextType = {
  isAuthenticated: false,
  errorMessage: null,
  login: async () => false,
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("accessToken");
    }
    return false;
  });

  async function login(data: LoginData): Promise<boolean> {
    try {
      const { email, password } = data;

      if (!email || !password) return false;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorMessage("유효하지 않은 이메일 형식입니다.");
        return false;
      }

      const response = await loginApi(email, password);

      if (response.data && response.data.accessToken) {
        setIsAuthenticated(true);

        sessionStorage.setItem("accessToken", response.data.accessToken);

        const token = "Bearer " + (response.data.accessToken as string);

        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = token;
          return config;
        });

        return true;
      } else {
        console.error("로그인 응답에 accessToken이 없습니다.");
        setErrorMessage("이메일 또는 비밀번호를 확인해주세요.");
        return false;
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      setErrorMessage("이메일 또는 비밀번호를 확인해주세요.");
      logout();
      return false;
    }
  }

  function checkAuthStatus() {
    const token = sessionStorage.getItem("accessToken");

    if (token) {
      setIsAuthenticated(true);
      apiClient.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + token;
        return config;
      });
    }
  }

  useEffect(() => {
    checkAuthStatus();
  }, []);

  function logout() {
    setIsAuthenticated(false);
    sessionStorage.removeItem("accessToken");
  }

  const value: AuthContextType = {
    isAuthenticated,
    errorMessage,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
