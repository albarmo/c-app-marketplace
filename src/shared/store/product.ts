import { atomWithStorage } from "jotai/utils";

export interface ProductCartItem {
  amount: number;
  productId: string;
  qty: number;
  sellerId: string;
  variantId: string;
  image?: string | "";
  name?: string;
}

export const productCartAtom = atomWithStorage<ProductCartItem[]>(
  "productCartState",
  []
);
