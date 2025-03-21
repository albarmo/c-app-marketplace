import { atomWithStorage } from "jotai/utils";

export const productListAtom = atomWithStorage<Product[]>("productListState", []);
  