import axios from "axios";

const myAxios = axios.create({
  baseURL: 'http://192.168.160.1:4000',
  timeout: 1000,
});

export default myAxios;