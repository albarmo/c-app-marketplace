
import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

export interface IRq_ProductCategory {
    page: number,
    limit: number
}

export interface IRs_ProductCategory {
    code: number;
    message: string;
    data: { items: any[] };
}

export async function API_Get_Product_Category(params: IRq_ProductCategory) {
    try {
        const response = await post(ENDPOINTS.product.category, {...params});
        const result = response?.Kind as IRs_ProductCategory
        return result;
    } catch (error: any) {
        console.log(error)
        return CommonError
    }
}
