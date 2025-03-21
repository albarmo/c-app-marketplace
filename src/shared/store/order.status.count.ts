import { atomWithStorage } from "jotai/utils";

export const orderStatusCount = atomWithStorage<OrderStatus[]>("orderStatusCountState", []);