import axios from "axios";

export const authAxios = axios.create({
  baseURL: "http://101.101.218.43",
});

const token = localStorage.getItem("access-token");

console.log(token);

if (token) {
  authAxios.defaults.headers.Authorization = `Bearer ${token}`;
}

// src/api/auth.js
export const signUpUser = async (form) => {
  try {
    const { data } = await authAxios.post("users", form);

    return data;
  } catch (e) {
    alert("회원가입에 실패했습니다.");
  }
};

export const signIn = async (form) => {
  try {
    const { data } = await authAxios.post("users/signin", form);

    const { token } = data;

    localStorage.setItem("access-token", token);

    authAxios.defaults.headers.Authorization = `Bearer ${token}`;

    return { success: true };
  } catch (e) {
    alert("로그인에 실패했습니다.");
  }
};

export const getCurrentUser = async () => {
  let { data } = await authAxios.get("/users/current");

  return data;
};

export const patchProfile = async (form) => {
  let { data } = await authAxios.patch("/users/profile", form);

  return data;
};

export const createPost = async (form) => {
  let { data } = await authAxios.post("/posts", form);
  return data;
};

export const getPostById = async (id) => {
  let { data } = await authAxios.get("/posts/" + id);

  return data;
};
