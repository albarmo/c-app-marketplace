
import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

const identity = '[api/auth.get.menus]';

export type T_MenuItem = {
    id: string
    name: string
    path: string
    show: boolean,
    accesses: null,
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null,
}

export interface IRs_GetUserMenus {
    code: number;
    message: string;
    data: {
        items: Array<T_MenuItem>
        limit: number
        page: number
        totalItems: number
        totalPages: number
    }
}

export async function API_GetUserMenus() {
    logger(identity, 'REQ')(null).info();

    try {
        const response = await get(ENDPOINTS.auth.menus)

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
