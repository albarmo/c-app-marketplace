import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";
import { logger } from "@/lib/logger";

const identity = '[api/product-list]';

export interface IRq_GetProduct {
    page: number,
    limit: number,
    filter: {
        search: string,
        stock?: string
    }
}

export interface IRs_GetProduct{
    code: number;
    message: string;
    data: { data: any[] };
}

export async function API_Get_Product(params: IRq_GetProduct) {

    try {
        const response = await post(ENDPOINTS.product.get, {...params});
        if (!response.OK) {
            const errorMessage: string = response.Kind?.message ?? response.Kind?.Message
            logger(identity, 'RES', errorMessage, response.StatusCode)(response.Kind).error()
            return { code: response.Kind.code, message: errorMessage, data: response.Kind.data }
        }
        const result = response?.Kind as IRs_GetProduct
        logger(identity, 'RES', response.Kind, response.StatusCode)(response?.Kind).info();

        return result;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.message, error?.response?.code)(error?.response).error();
        return CommonError
    }
}
