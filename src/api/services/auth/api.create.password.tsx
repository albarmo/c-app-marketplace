import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

const identity = '[api/auth.create.password]';
export interface IRq_CreatePassword {
    password: string
    passwordConfirmation: string
}

export interface IRs_CreatePassword {
    code: number;
    message: string;
    data: null
}

export async function API_CreatePassword(data: IRq_CreatePassword, tokenUrl: string) {
    logger(identity, 'REQ', "Attemp Create Password")(data).info();
    try {
        const response = await post(ENDPOINTS.auth.createPassword, { ...data }, { "X-Localoka-Token": tokenUrl })

        if (!response.OK) {
            const errorMessage: string = response.Kind?.message ?? response.Kind?.Message
            logger(identity, 'RES', errorMessage, response.StatusCode)(response.Kind).error();

            return { code: response.Kind.code, message: errorMessage, data: response.Kind.data }
        }

        const result = response?.Kind
        logger(identity, 'RES', 'response_data', response.StatusCode)(response?.Kind).info();

        return result;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.message, error?.response?.code)(error?.response).error();
        return CommonError
    }
}
