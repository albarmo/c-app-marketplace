import { ENDPOINTS } from "../../endpoint";
import { post } from "../../sdk/call";
import { CommonError } from "../../sdk/common.http";

export interface IRq_PublishProduct {
    ids: string[],
    publish: boolean
}

export interface IRs_PublishProduct {
    code: number;
    message: string;
    data: null;
}

export async function API_Publish_Product(params: IRq_PublishProduct) {

    try {
        const response = await post(ENDPOINTS.product.publish, {...params});
        const result = response?.Kind as IRs_PublishProduct

        return result;
    } catch (error: any) {
        console.log(error)

        return CommonError
    }
}
