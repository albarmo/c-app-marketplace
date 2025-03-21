import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

const identity = '[api/auth.create.pin]';
export interface IRq_CreatePIN {
    pin: string
    pinConfirmation: string
}

export interface IRs_CreatePIN {
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

export async function API_CreatePIN(data: IRq_CreatePIN) {
    logger(identity, 'REQ')(data).info();
    try {
        const response = await post(ENDPOINTS.auth.createPIN, { ...data })

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
