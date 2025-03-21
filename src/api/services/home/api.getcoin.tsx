
// import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { Rq_Headers_Olive } from "../../sdk/common.headers";
// import { CommonError } from "../../sdk/common.http";

// const identity = '[api/home.getcoin';

export interface IRq_GetCoin {
    id: string;
}

export interface IRs_GetCoin {
    code: number;
    message: string;
    data: {
        id: number;
        user_id: string;
        account_number: string;
        account_name: string;
        hold_amount: number;
        available_balance: number;
        current_balance: number;
        currency_type: string;
        active_date: string;
        status: string;
    }
}

export async function API_GetCoin({ id }: IRq_GetCoin) {
    // const payload = {
    //     baseUrl: ENDPOINTS.home.getcoin,
    // };
    
    // logger(identity, 'REQ')(payload).info();
    try {
        const response = await get(`${ENDPOINTS.home.getcoin}/${id}`, {
            method: 'GET',
            headers: Rq_Headers_Olive,
        });
        
        const responseData = response?.Kind
        // logger(identity, 'RES', 'response_data', 200)(responseData).info();

        return responseData;
    } catch (error: any) {
        // logger(identity, 'ERR', error?.response?.data?.responseDesc, error?.response?.status)(error?.response).error();

        return error
    }
}
