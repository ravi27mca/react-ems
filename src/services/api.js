import axios from 'axios';
import KeycloakService from './KeycloakService';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Replace with your actual Backend URL
});

// REQUEST: Add Token before the request is sent
api.interceptors.request.use(
    async (config) => {
        // Wait for token refresh if necessary
        await new Promise((resolve) => {
            KeycloakService.updateToken(() => resolve());
        });

        const token = KeycloakService.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// RESPONSE: Global Error Handler
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // If server returns 401, the user's session is dead
        if (error.response && error.response.status === 401) {
            KeycloakService.doLogout();
        }
        return Promise.reject(error);
    }
);

export default api;