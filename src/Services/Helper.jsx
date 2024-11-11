import axios  from "axios";
import { getToken } from "../Auth/Authdetails";

export const BASE_URL ="https://reqres.in/api/";

// this global helper function

export const myAxios = axios.create({
    baseURL: BASE_URL,
  });

  export const privateAxios = axios.create({
    baseURL: BASE_URL,
  });

  privateAxios.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token) {
        config.headers.common.Authorization = `Bearer ${token}`;
        // console.log(config);
      }

      return config;
    },
    (error) => Promise.reject(error)
  );