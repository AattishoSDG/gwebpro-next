import axios from 'axios';
const API_BASE_URL = 'https://netfirst.ca/gwebpro_new/wp-json/';

const apiService = {


     // GET request to fetch page data
     getPagedata: async (endpoint) => {
        try {
        const response = await axios.get(`${API_BASE_URL}${endpoint}`);
        return response.data;
        } catch (error) {
        console.error("Error fetching data: ", error.response || error.message);
        throw error;
        }
    },

    // GET request to fetch page data
    getacfData: async (endpoint) => {
        try {
        const response = await axios.get(`${API_BASE_URL}${endpoint}`);
        return response.data;
        } catch (error) {
        console.error("Error fetching data: ", error.response || error.message);
        throw error;
        }
    },

    // POST request to send data
    postData: async (endpoint, data) => {
        try {
        const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
        return response.data;
        } catch (error) {
        console.error("Error posting data: ", error.response || error.message);
        throw error;
        }
    }
};
export default apiService;