const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${BASE_URL}/auth/login`,
        REGISTER: `${BASE_URL}/auth/register`,
        LOGOUT: `${BASE_URL}/auth/logout`,
        REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`,
    },
};
export default API_ENDPOINTS;