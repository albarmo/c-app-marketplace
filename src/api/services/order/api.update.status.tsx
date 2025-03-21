import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";
import { logger } from "@/lib/logger";

const identity = '[api/order-list]';

export interface IRq_UpdateOrderStatus {
    invoiceId: string
    status: string
}

export interface IRs_UpdateOrderStatus{
    code: number
    message: string
    data: any;
}

export async function API_Update_Order_Status(params: IRq_UpdateOrderStatus) {

    try {
        const response = await post(ENDPOINTS.order.updateStatus, {...params});

        if (!response.OK) {
            const errorMessage: string = response.Kind?.message ?? response.Kind?.Message
            logger(identity, 'RES', errorMessage, response.StatusCode)(response.Kind).error()
            return { code: response.Kind.code, message: errorMessage, data: response.Kind.data }
        }

        const result = response?.Kind as IRs_UpdateOrderStatus

        logger(identity, 'RES', response.Kind, response.StatusCode)(response?.Kind).info();

        return result;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.message, error?.response?.code)(error?.response).error();
        return CommonError
    }
}
