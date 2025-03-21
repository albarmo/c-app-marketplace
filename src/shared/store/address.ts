import { atomWithStorage } from "jotai/utils";

export interface AddressState {
    id: string;
    name: string;
    phone: string;
    label: string;
    type: "BUYER" | "SELLER" | string;
    address: string;
    description?: string;
    recipient_name: string;
    recipient_phone_number: string;
    latitude: number;
    longitude: number;
    is_default: boolean;
    province_name: string;
    province_id: string;
    city_name: string;
    city_id: string;
    district_name: string;
    district_id: string;
    village_name: string;
    village_id: string;
    postalCode: string;
    street: string;
  }


export const initialAddressState: AddressState = {
    id: "",
    name: "",
    phone: "",
    label: "",
    type: "",
    address: "",
    description: "",
    recipient_name: "",
    recipient_phone_number: "",
    latitude: 0,
    longitude: 0,
    is_default: false,
    province_name: "",
    province_id: "",
    city_name: "",
    city_id: "",
    district_name: "",
    district_id: "",
    village_name: "",
    village_id: "",
    postalCode: "",
    street: "",
}

export const addressAtom = atomWithStorage<AddressState>("addressState", initialAddressState)