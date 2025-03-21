
import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

export interface IRq_ProductImage {
    type: string,
    image: string
}

export interface IRs_ProductImage {
    code: number;
    message: string;
    data: { token: string };
}

export async function API_UploadImage(params: IRq_ProductImage) {
    try {
        const response = await post(ENDPOINTS.product.image, {...params});
        const result = response?.Kind as IRs_ProductImage
        return result;
    } catch (error: any) {
        console.error(error)
        return CommonError
    }
}
