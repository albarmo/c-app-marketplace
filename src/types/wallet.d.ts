type LayoutContextType = {
    title: string;
    setTitle: (title: string) => void;
    coin: string;
    setCoin: (coin: string) => void;
    coinStatus: boolean;
    setCoinStatus: (status: boolean) => void;
}

interface FloatingLabelInputProps {
    name: string;
    placeHolder: string;
    label: string;
    value: string;
    register: any;
    errors?: any;
    setValue: any;
}

interface WithdrawCoinModalProps {
    currentCoin: string;
}

interface ButtonGroupDialogProps {
    handleCloseModal: () => void; 
    isDisabled: boolean;
    leftButtonText: string;
    rightButtonText: string;
}

interface ModalFormTopup {
    selectedCoinTopup: string;
    setSelectedCoinTopup: any;
    setOpenConfirmation: any;
}

type HistoryCategory = {
    id: number;
    name: string;
    alias: string;
    status: "active" | "inactive";
}

type ListDefaultTopup = {
    id: number;
    nominal: string;
    selected: boolean;
}

type Transaction = {
    user_id: string;
    transaction_description: string;
    transaction_type: string;
    debit: number;
    credit: number;
    remark: string;
    created_at: string;
}

type TransactionHistory = {
    [key: string]: Transaction[];
}