import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";
import { logger } from "@/lib/logger";
import qs from "@/shared/func/queryString";

const identity = '[api/order-list]';

export interface IRq_GetOrderList {
    page: number
    limit: number
    search: string
    status: string
}

export interface IRs_GetOrderList{
    code: number
    message: string
    data: { 
        items: any[],
        totalItems?: number
    };
}

export async function API_Get_Order_list(params: IRq_GetOrderList) {

    try {
        const queryString = qs(params)
        const requestUrl = `${ENDPOINTS.order.get}${queryString}`;

        logger(identity, 'URL', requestUrl)(requestUrl).info();

        const response = await get(requestUrl);

        if (!response.OK) {
            const errorMessage: string = response.Kind?.message ?? response.Kind?.Message
            logger(identity, 'RES', errorMessage, response.StatusCode)(response.Kind).error()
            return { code: response.Kind.code, message: errorMessage, data: response.Kind.data }
        }

        const result = response?.Kind as IRs_GetOrderList

        logger(identity, 'RES', response.Kind, response.StatusCode)(response?.Kind).info();

        return result;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.message, error?.response?.code)(error?.response).error();
        return CommonError
    }
}
