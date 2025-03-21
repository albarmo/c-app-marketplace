
import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { Rq_Headers } from "../../sdk/common.headers";
import { CommonError } from "../../sdk/common.http";

const identity = '[api/auth.verify.email]';
export interface IRq_VerifyEmail {
    id: string
    token: string
}

export interface IRs_VerifyEmail {
    code: number;
    message: string;
    data: any
}

export async function API_VerifyEmail(data: IRq_VerifyEmail) {
    const payload = {
        baseUrl: ENDPOINTS.auth.verifyEmail,
        request: data,
    };

    logger(identity, 'REQ')(payload).info();
    try {
        const response = await post(ENDPOINTS.auth.verifyEmail, {
            method: 'POST',
            headers: Rq_Headers,
            body: JSON.stringify(data),
        });

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
