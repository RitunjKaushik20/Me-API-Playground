const API_BASE = import.meta.env.VITE_API_URL;

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  return res.json();
}

export const getProfile = () => apiGet("/profile");

export const getSkills = () => apiGet("/skills/top");

export const getProjects = (skill) => {
  const query = skill ? `?skill=${encodeURIComponent(skill)}` : "";
  return apiGet(`/projects${query}`);
};

export const searchAll = (q) =>
  apiGet(`/search?q=${encodeURIComponent(q)}`);
