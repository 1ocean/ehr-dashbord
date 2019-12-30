import Vue from  'vue'
import axios from 'axios';
Vue.prototype.$axios = axios;

axios.interceptors.request.use(
    config => {
        return config;
    }, err => {

        return Promise.reject(err)
    });

axios.interceptors.response.use(
    res => {
        return res;
    }, err => {

        return Promise.reject(err)
    });



