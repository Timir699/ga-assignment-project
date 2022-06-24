import axios from 'axios';
import { baseUrl } from "./api";

export const client = axios.create({
    baseURL: baseUrl
});


export default client;
