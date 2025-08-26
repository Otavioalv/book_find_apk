import axios from "axios";

const URL = "https://softwium.com/api";

const bookApi = axios.create({
    baseURL: URL
});

export default bookApi;
