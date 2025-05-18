import request from "./index";

export interface LoginRequest {
  id: string;
  password: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const login = (id: string, password: string): Promise<TokenResponse> => {
  return request
    .post("/auth/loign", {
      id,
      password,
    })
    .then((res) => res.data);
};

export const signup = (data: LoginRequest) => {
  return request.post("/auth/sign-up", data);
};
