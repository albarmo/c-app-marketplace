import {
    SERVICE_P_BASE,
    SERVICE_P_AUTH,
    SERVICE_OLIVE,
} from "./sdk/common.service";

export const ENDPOINTS = {
    auth: {
        login: `${SERVICE_P_AUTH}/login`,
        createPIN: `${SERVICE_P_BASE}/pin`,
        createPassword: `${SERVICE_P_BASE}/password`,
        logout: `${SERVICE_P_AUTH}/logout`,
        verifyEmail: `${SERVICE_P_AUTH}/verify-email`,
        captcha: `${SERVICE_P_AUTH}/captcha/generate`,
        menus: `${SERVICE_P_BASE}/dashboard/menu`,
    },
    profile: {
        me: `${SERVICE_P_BASE}/dashboard/profile`,
    },
    home: {
        coinactivation: `${SERVICE_OLIVE}/api/v1/wallet/account/activated`,
        getcoin: `${SERVICE_OLIVE}/api/v1/wallet/account/detail`,
        historycoin: `${SERVICE_OLIVE}/api/v1/wallet/account/history`,
        topupcoin: `${SERVICE_OLIVE}/api/v1/wallet/account/topup`,
        withdrawcoin: `${SERVICE_OLIVE}/api/v1/wallet/account/withdraw`,
    },
    product: {
        delete: `${SERVICE_P_BASE}/dashboard/product/`,
        category: `${SERVICE_P_BASE}/dashboard/categories`,
        image: `${SERVICE_P_BASE}/dashboard/product/upload-image`,
        create: `${SERVICE_P_BASE}/dashboard/product`,
        get: `${SERVICE_P_BASE}/dashboard/products`,
        publish: `${SERVICE_P_BASE}/dashboard/product/publish`,
        detail: `${SERVICE_P_BASE}/dashboard/product/`,
        update: `${SERVICE_P_BASE}/dashboard/product`,
    },
    order: {
        get: `${SERVICE_P_BASE}/dashboard/order/list`,
        updateStatus: `${SERVICE_P_BASE}/dashboard/order/update/status`,
        detail: `${SERVICE_P_BASE}/dashboard/order/detail/`,
        send: `${SERVICE_P_BASE}/dashboard/order/awb/`,
    },
};
