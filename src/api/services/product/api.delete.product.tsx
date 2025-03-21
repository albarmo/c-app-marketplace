
import { ENDPOINTS } from "../../endpoint";
import { del } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

export interface IRq_DeleteProduct {
    id: string
}

export interface IRs_DeleteProduct {
    code: number;
    message: string;
    data: null
}

export async function API_DeleteProduct(params: IRq_DeleteProduct) {
    try {
        const response = await del(ENDPOINTS.product.delete + params.id);
        const result = response?.Kind as IRs_DeleteProduct

        return result;
    } catch (error: any) {
        console.log(error)

        return CommonError
    }
}
