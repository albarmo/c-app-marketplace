import { atomWithStorage } from "jotai/utils";

const listTab = [
  {
    id: "waitingConfirmation",
    name: "Pesanan Baru",
    path: "/store/order/waiting-confirmation",
  },
  { id: "packaged", name: "Dikemas", path: "/store/order/packaged" },
  {
    id: "onShipment",
    name: "Dikirim",
    path: "/store/order/waiting-shipment",
  },
  { id: "delivered", name: "Diterima", path: "/store/order/delivered" },
  { id: "canceled", name: "Dibatalkan", path: "/store/order/canceled" },
  { id: "completed", name: "Selesai", path: "/store/order/completed" },
];

const initialState: TabState = {
  listTab: listTab,
  activeTab: listTab[0].name,
};

export const activeTabAtom = atomWithStorage<TabState["activeTab"]>(
  "activeTabState",
  initialState["activeTab"]
);

export const listTabAtom = atomWithStorage<TabState["listTab"]>(
  "listTabState",
  initialState["listTab"]
);
