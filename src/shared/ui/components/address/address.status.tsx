import { FC } from "react";
import { AddressFormValidationType } from "@/schema/address-schema";

interface StatusSelectorProps {
    statusOptions: AddressFormValidationType["status"];
    watch: any;
    handleStatusChange: (status: AddressFormValidationType["status"][number]) => void;
    register: any;
}

const StatusSelector: FC<StatusSelectorProps> = ({
    statusOptions,
    watch,
    handleStatusChange,
    register
}) => {
    return (
        <div>
            <input type="hidden" {...register("status")} />
            <div className="flex gap-3 mt-1">
                {statusOptions.map((status) => (
                    <button
                        key={status}
                        type="button"
                        className={`relative flex-1 py-3 px-4 rounded text-sm border transition-all duration-200 
                            ${watch("status")?.includes(status)
                                ? "border-2 border-primary text-primary"
                                : "border-gray-300 text-gray-600"
                            }`}
                        onClick={() => handleStatusChange(status)}
                    >
                        {watch("status")?.includes(status) && (
                            <span className="absolute top-0 left-0 bg-primary w-5 h-5 rounded-br-md flex items-center justify-center text-white shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                    <path d="M9 16.17l-4.17-4.17-1.41 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                            </span>
                        )}
                        {status}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StatusSelector;
