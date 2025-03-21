
import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";
import { Product } from "@/types/product";

export interface IRs_CreateProduct {
    code: number;
    message: string;
    data: { data: any[] };
}

export async function API_Create_Product(params: Product) {
    try {
        const response = await post(ENDPOINTS.product.create, {...params});
        const result = response?.Kind as IRs_CreateProduct

        return result;
    } catch (error: any) {
        console.log(error)
        return CommonError
    }
}
