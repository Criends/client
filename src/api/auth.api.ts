import { apiClient } from "./apiClient";

export const loginApi = (email: string, password: string) =>
  apiClient.post("/auth/login", { email, password });
