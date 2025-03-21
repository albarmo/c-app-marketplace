import { atomWithStorage } from "jotai/utils";

export const orderListAtom = atomWithStorage<OrderData>("orderListState", {} as OrderData);