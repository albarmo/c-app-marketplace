import { atomWithStorage } from "jotai/utils";

const listTab = [
    { id: "tab1", name: "Menunggu Pembayaran", path: "/order/waiting/payment" },
    { id: "tab2", name: "Menunggu Konfirmasi", path: "/order/waiting/confirmation" },
    { id: "tab3", name: "Dikemas", path: "/order/packaged" },
    { id: "tab4", name: "Dikirim", path: "/order/shipment" },
    { id: "tab5", name: "Diterima", path: "/order/delivered" },
    { id: "tab6", name: "Dibatalkan", path: "/order/canceled" },
    { id: "tab7", name: "Selesai", path: "/order/completed" }
]

const initialState: OrderTabState  = {
    listTab: listTab,
    activeTab: listTab[0].name
}

export const activeTabAtom = atomWithStorage<OrderTabState["activeTab"]>("activeTabState", initialState["activeTab"]);
export const listTabAtom = atomWithStorage<OrderTabState["listTab"]>("listTabState", initialState["listTab"]);