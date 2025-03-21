import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

const identity = '[api/auth.login]';
export interface IRq_Login {
    id: string
    password: string
    type: "username" | "email" | "phoneNumber"
}

export interface IRs_Login {
    code: number;
    message: string;
    data: {
        shouldCreatePIN?: boolean
        token?: string
        id?: string
        password?: string
        type?: string
    } | null
}

export async function API_Login(data: IRq_Login) {
    logger(identity, 'REQ', "Attemp to Login")(data).info();

    try {
        const response = await post(ENDPOINTS.auth.login, { ...data })

        if (!response.OK) {
            const errorMessage: string = response.Kind?.message ?? response.Kind?.Message
            logger(identity, 'RES', errorMessage, response.StatusCode)(response.Kind).error();

            return { code: response.Kind.code, message: errorMessage, data: response.Kind.data }
        }

        const result = response?.Kind
        logger(identity, 'RES', 'response_data', response.StatusCode)(result).info();

        return result;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.message, error?.response?.code)(error?.response).error();
        return CommonError
    }
}
