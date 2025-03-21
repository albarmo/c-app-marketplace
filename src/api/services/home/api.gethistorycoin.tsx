
import { logger } from "@/lib/logger";
import { ENDPOINTS } from "../../endpoint";
import { get } from "../../sdk/call";
import { Rq_Headers_Olive } from "../../sdk/common.headers";
import { CommonError } from "../../sdk/common.http";

const identity = '[api/home.historycoin';

export interface IRq_GetHistoryCoin {
    page: string;
    limit: string;
    sort: string;
    type: string;
}

export interface IRs_GetHistoryCoin {
    code: number,
    message: string,
    data: {
        data: {
            accounts: {
                id: string,
                user_id: number,
                account_number: number,
                account_name: string,
                hold_amount: number,
                available_balance: number,
                current_balance: number,
                currency_type: string,
                active_date: string,
                status: number
            },
            transactions: {
                [key: string]: any
            }
        },
        meta: {
            limit: number,
            page: number,
            sort: string,
            total: number
        }
    }
}

export async function API_GetHistoryCoin({ page, limit, sort, type }: IRq_GetHistoryCoin) {
    const payload = {
        baseUrl: ENDPOINTS.home.historycoin,
    };

    logger(identity, 'REQ')(payload).info();
    try {
        const response = await get(`${ENDPOINTS.home.historycoin}/page=${page}&limit=${limit}&sort=${sort}&type=${type}`, {
            method: 'GET',
            headers: Rq_Headers_Olive,
        });

        const responseData = response?.Kind
        logger(identity, 'RES', 'response_data', 200)(responseData).info();

        return responseData;
    } catch (error: any) {
        logger(identity, 'ERR', error?.response?.data?.responseDesc, error?.response?.status)(error?.response).error();

        return CommonError
    }
}
