import axios from "axios";

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const API_BASE = "http://localhost:3000";

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const mockApi = {
  shortenUrl: async ({ long_url, expiry_minutes, custom_code }) => {
    const urls = JSON.parse(localStorage.getItem("urls")) || [];
    const shortUrl = custom_code || Math.random().toString(36).substring(2, 8);
    const expiry = Date.now() + expiry_minutes * 60 * 1000;
    const newEntry = { long_url, shortUrl, expiry, clicks: [] };

    urls.push(newEntry);
    localStorage.setItem("urls", JSON.stringify(urls));

    return newEntry;
  },

  getStats: async () => {
    return JSON.parse(localStorage.getItem("urls")) || [];
  },
};
