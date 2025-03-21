import { atomWithStorage } from "jotai/utils";

export interface OrderState {
    platformFee: number;
    voucherId: number;
    paymentMethod: string;
    totalPrice: number;
    orderProduct: {
        sellerId: string;
        productId: string;
        qty: number;
        name?: string | null;
        variantId?: string;
        store?: string | null;
        image?: string | null;
    }[];
    orderShipping: {
        courierName: string;
        courierService: string;
        courierServiceCode: string;
        waybill: string;
        shippingUnit: string;
        shippingUnitValue: string;
        amount: number;
        insurance: boolean;
        insurancePrice: number;
        estimationStart?: string;
        estimationEnd?: string;
        estimationUnit?: string;
        orderAddress: {
            name: string;
            phone: string;
            types: string;
            province: string;
            provinceId: string;
            city: string;
            cityId: string;
            district: string;
            districtId: string;
            village: string;
            villageId: string;
            postalCode: string;
            street: string;
            number: string;
            notes: string;
        }[];
    };
}

export const initialState: OrderState = {
    platformFee: 0,
    voucherId: 0,
    paymentMethod: "",
    totalPrice: 0,
    orderProduct: [],
    orderShipping: {
        courierName: "",
        courierService: "",
        courierServiceCode: "",
        waybill: "",
        shippingUnit: "",
        shippingUnitValue: "",
        amount: 0,
        insurance: false,
        insurancePrice: 0,
        orderAddress: [],
    },
};

export const orderAtom = atomWithStorage<OrderState>("orderState", initialState);
