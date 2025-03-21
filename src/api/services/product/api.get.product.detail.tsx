import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

export interface IRq_GetProductDetail {
    id: string
}

export interface IRs_GetProductDetail{
    code: number;
    message: string;
    data: {
        id: string;
        information: ProductInformation;
        detail: ProductDetail;
        price: Price;
        specification: Specification;
        variant: Variant
    };
}

export async function API_Get_Product_Detail(params: IRq_GetProductDetail) {

    try {
        const response = await get(ENDPOINTS.product.detail + params.id);
        const result = response?.Kind as IRs_GetProductDetail

        return result;
    } catch (error: any) {
        console.log(error)

        return CommonError
    }
}
