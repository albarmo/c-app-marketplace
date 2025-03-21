import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";
import { logger } from "@/lib/logger";

const identity = '[api/order-detail]';

export interface IRq_GetOrderDetail {
    invoiceId: string
}

export interface IRs_GetOrderDetail {
    code: number
    message: string
    data: any
}

export async function API_Get_Order_detail(params: IRq_GetOrderDetail) {
    try {
        const response = await get(`${ENDPOINTS.order.detail}${params}`)

        if (!response.OK) {
            const errorMessage: string = response.Kind?.message ?? response.Kind?.Message
            logger(identity, 'RES', errorMessage, response.StatusCode)(response.Kind).error()
            return { code: response.Kind.code, message: errorMessage, data: response.Kind.data }
        }

        const result = response?.Kind as IRs_GetOrderDetail

        logger(identity, 'RES', response.Kind, response.StatusCode)(response?.Kind).info();

        return result;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.message, error?.response?.code)(error?.response).error();
        return CommonError
    }
}
