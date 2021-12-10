import { TOKEN } from 'common';

export const getToken = () => localStorage.getItem(TOKEN);
export const setToken = (token: string) => localStorage.setItem(TOKEN, token);
export const clearToken = () => localStorage.removeItem(TOKEN);
