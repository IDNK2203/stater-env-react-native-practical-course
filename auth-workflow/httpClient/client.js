import axios from "axios";
import { BASE_URL, API_KEY } from "@env";
import { getData, removeValue, storeData } from "../asyncStore/store";

const RT_BASE_URL =
  "https://rn-practical-course-default-rtdb.europe-west1.firebasedatabase.app";

export const httpInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "X-Custom-Header": "RN-expense-trancker" },
});

httpInstance.defaults.headers["Content-Type"] = "application/json";

export const restrictedAxios = axios.create();
export const refreshAxios = axios.create();

restrictedAxios.defaults.headers["Authorization"] = "";
restrictedAxios.defaults.headers["Accept"] = "application/json";
restrictedAxios.defaults.headers["Content-Type"] = "application/json";
restrictedAxios.defaults.baseURL = RT_BASE_URL;

refreshAxios.defaults.headers["Authorization"] = "";
refreshAxios.defaults.headers["Accept"] = "application/json";
refreshAxios.defaults.headers["Content-Type"] = "application/json";

restrictedAxios.interceptors.request.use(
  async (config) => {
    if (!config._retry) {
      config._retry = true;
      try {
        const token = await getData("token");
        if (!token) {
          throw { message: "Invalid Token" }; // not-testable
        }
        if (Date.now() - token.issAt <= 3000 * 1000) {
          config.url = config.url + "?auth=" + token.access;
          return config;
        } else {
          const rs = await refreshAxios.post(
            `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
            {
              grant_type: "refresh_token",
              refresh_token: token.refresh,
            }
          );
          config.url = config.url + "?auth=" + rs?.data?.id_token;
          return config;
        }
      } catch (error) {
        error.falseAuthState = true;
        return Promise.reject(error);
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

refreshAxios.interceptors.response.use(
  (response) => {
    const rs = response.data;
    const tokenObj = {
      access: rs?.id_token,
      refresh: rs?.refresh_token,
      issAt: Date.now(),
    };
    storeData("token", tokenObj);
    return response;
  },
  (error) => {
    removeValue("token");
    return Promise.reject(error);
  }
);
