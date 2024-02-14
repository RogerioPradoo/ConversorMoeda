// https://economia.awesomeapi.com.br/json/all

import axios from 'axios';

export const api = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/json/"
});