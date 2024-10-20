import { apiClient } from "./apiClient";

export const helloWorldApi = () => apiClient.get("/");
