
import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { Rq_Headers_Olive } from "../../sdk/common.headers";
import { CommonError } from "../../sdk/common.http";

const identity = '[api/home.topupcoin';
export interface IRq_TopupCoin {
    user_id: string,
    wallet_account_id:string,
    amount: number
}

export interface IRs_TopupCoin {
    code: number;
    message: string;
    data: [{[key: string]: any}] | null;
}

export async function API_TopupCoin(data: IRq_TopupCoin) {
    const payload = {
        baseUrl: ENDPOINTS.home.topupcoin,
        request: data,
    };

    logger(identity, 'REQ')(payload).info();
    try {
        const response = await get(ENDPOINTS.home.topupcoin, {
            method: 'POST',
            headers: Rq_Headers_Olive,
            body: JSON.stringify(data),
        });

        const responseData = response?.Kind
        logger(identity, 'RES', 'response_data', 200)(responseData).info();

        return responseData;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.responseDesc, error?.response?.status)(error?.response).error();

        return CommonError
    }
}
