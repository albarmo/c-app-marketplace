import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";
import { logger } from "@/lib/logger";

const identity = '[api/order-detail]';

export interface IRq_SendOrder {
    invoiceId: string
}

export interface IRs_SendOrder{
    code: number
    message: string
    data: {
        invoiceId: string
    }
}

export async function API_Send_Order(id: string) {
    try {
        const response = await get(`${ENDPOINTS.order.send}${id}`)

        if (!response.OK) {
            const errorMessage: string = response.Kind?.message ?? response.Kind?.Message
            logger(identity, 'RES', errorMessage, response.StatusCode)(response.Kind).error()
            return { code: response.Kind.code, message: errorMessage, data: response.Kind.data }
        }

        const result = response?.Kind as IRs_SendOrder

        logger(identity, 'RES', response.Kind, response.StatusCode)(response?.Kind).info();

        return result;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.message, error?.response?.code)(error?.response).error();
        return CommonError
    }
}
