import api from './api';

class ApiService {
    async get(url, params = {}) {
        const response = await api.get(url, { params });
        return response.data;
    }

    async post(url, data) {
        const response = await api.post(url, data);
        return response.data;
    }

    async put(url, data) {
        const response = await api.put(url, data);
        return response.data;
    }

    // NEW: Patch method for partial updates
    async patch(url, data) {
        const response = await api.patch(url, data);
        return response.data;
    }

    async delete(url) {
        const response = await api.delete(url);
        return response.data;
    }
}

export default new ApiService();