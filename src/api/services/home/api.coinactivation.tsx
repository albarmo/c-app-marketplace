
// import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { Rq_Headers_Olive } from "../../sdk/common.headers";
// import { CommonError } from "../../sdk/common.http";

// const identity = '[api/home.coinactivation';
export interface IRq_CoinActivation {
    user_id: string;
    account_number: string;
    account_name: string;
}

export interface IRs_CoinActivation {
    code: number;
    message: string;
    data: [{[key: string]: any}] | null;
}

export async function API_CoinActivation(data: IRq_CoinActivation) {
    // const payload = {
    //     baseUrl: ENDPOINTS.home.coinactivation,
    //     request: data,
    // };

    // logger(identity, 'REQ')(payload).info();
    try {
        const response = await get(ENDPOINTS.home.coinactivation, {
            method: 'POST',
            headers: Rq_Headers_Olive,
            body: JSON.stringify(data),
        });

        const responseData = response?.Kind
        // logger(identity, 'RES', 'response_data', 200)(responseData).info();

        return responseData;
    } catch (error: any) {
        // logger(identity, 'ERR', error?.response?.data?.responseDesc, error?.response?.status)(error?.response).error();

        return error
    }
}
