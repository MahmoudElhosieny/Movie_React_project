import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: "2d896cea1324879a1fcee9cdb081a484",
    }
});

export default axiosInstance;