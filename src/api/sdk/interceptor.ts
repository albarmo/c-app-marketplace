import axios from "axios";
import { ENV } from "@/configs/environment";
import { Rq_Headers } from "./common.headers";

const baseURL = ENV.URI.BASE_URL;
const isServer = typeof window === "undefined";

const api = axios.create({
    baseURL,
    headers: {
        ...Rq_Headers,
    },
});

api.interceptors.request.use(async (config) => {
    if (isServer) {
        const { cookies } = await import("next/headers");
        const token = (await cookies()).get(ENV.TOKEN_KEY)?.value;
        const authToken = (await cookies()).get(ENV.AUTH_TOKEN_KEY)?.value;
        const deviceId = (await cookies()).get("device-id")?.value;

        config.headers["X-Localoka-Device-ID"] = deviceId;

        if (authToken) {
            config.headers.Authorization = authToken;
        }

        if (token) {
            config.headers.Authorization = token;
        }
    } else {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
            "$1",
        );
        if (token) {
            config.headers.Authorization = token;
        }
    }

    return config;
});

export default api;
