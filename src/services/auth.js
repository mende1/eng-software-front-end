import api from "./api";

export const TOKEN_KEY = "@mata62-Token";

export function isAuthenticated() {
  return localStorage.getItem(TOKEN_KEY) !== null;
}

export async function getRoleOfUser() {
  const response = await api.get("/auth/profile");

  return response.data.role;
}

export async function getIsAdmin() {
  const response = await api.get("/auth/profile");

  return response.data.is_admin;
}

export async function getTypeOfIntitution() {
  const response = await api.get("/auth/profile");
  const institutionID = response.data.institution_id;

  const isAdmin = await getIsAdmin();

  if (isAdmin) return "admin";

  const responseInstitution = await api.get(`/institutions/${institutionID}`);
  return responseInstitution.data.type;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function login(token) {
  return localStorage.setItem(TOKEN_KEY, token);
}

export function logout() {
  return localStorage.removeItem(TOKEN_KEY);
}
