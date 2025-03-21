
import { ENDPOINTS } from "../../endpoint";
import { put } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";
import { Product } from "@/types/product";

export interface IRs_UpdateProduct {
    code: number;
    message: string;
    data: { data: any[] };
}

export async function API_Update_Product(params: Product) {
    try {
        const response = await put(ENDPOINTS.product.update, {...params});
        const result = response?.Kind as IRs_UpdateProduct
        return result;
    } catch (error: any) {
        console.log(error)
        return CommonError
    }
}
