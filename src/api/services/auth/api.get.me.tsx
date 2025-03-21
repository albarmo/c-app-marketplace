
import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

const identity = '[api/auth.get.me]';

export type T_UserData = {
    id?: string
    picEmail?: string
    picName?: string
    picPhoneNumber?: string
    principleName?: string
    sellerAccountNumber?: string
    sellerName?: string
}

export interface IRs_GetUserMe {
    code: number;
    message: string;
    data: T_UserData
}

export async function API_GetUserMe() {
    logger(identity, 'REQ', "Get User Me")(null).info();

    try {
        const response = await get(ENDPOINTS.profile.me)

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
