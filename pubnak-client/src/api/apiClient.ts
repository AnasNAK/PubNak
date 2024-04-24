// import axios from 'axios';

// const API_BASE_URL = 'http://localhost/api/';

// export const login = async (email: string, password: string) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
//         return response.data;
//     } catch (error: any) {
//         if (error.response) {
//             throw error.response.data;
//         } else {
//             throw error;
//         }
//     }
// };

// export const getCategories = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/categories`);
//         return response.data;
//     } catch (error: any) {
//         if (error.response) {
//             throw error.response.data;
//         } else {
//             throw error;
//         }
//     }
// };
