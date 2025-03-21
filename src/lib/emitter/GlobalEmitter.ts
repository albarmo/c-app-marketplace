import { EventEmitter } from "./EventEmitter";

type ModalType = "success" | "error" | "approve";

export type Emit_OpenModalGeneralData = {
    id?: ModalType | null;
    variant: "dialog" | "status" | "form";
    status?: "success" | "failed";
    title?: string;
    buttonTitle?: string;
    onConfrim?: () => void;
    children: React.ReactNode | string;
    closable?: boolean;
    confirmTitle?: string;
    cancelTitle?: string;
    actionColor?: string
};

export type Emit_CloseModalGeneralData = {
    onClose?: () => void;
};

export type Emit_DisplayLoadingSpinner = {
    status: boolean;
};

export type Emit_OpenSnackbar = {
    status?: "success" | "error";
    message: string;
};

export type Emit_CloseSnackbar = {
    onClose?: () => void;
};

type EventMap = {
    openModalGeneral: [data: Emit_OpenModalGeneralData];
    closeModalGeneral: [data: Emit_CloseModalGeneralData];
    openDrawer: [data: null];
    displayLoadingSpinner: [data: Emit_DisplayLoadingSpinner];
    openSnackbar: [data: Emit_OpenSnackbar];
    closeSnackbar: [data: Emit_CloseSnackbar];
};

export const globalEmitter = new EventEmitter<EventMap>();
