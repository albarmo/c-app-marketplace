import React from "react";
import { IoMdSend } from "react-icons/io";

interface ButtonProps {
    label: string;
    variant?: string;
    disabled?: boolean;
    onClick?: () => void;
    paramClass?: string;
    icon?: string;
}

const Button: React.FC<ButtonProps> = ({ label, variant, disabled = false, onClick, paramClass, icon }) => {
    const buttonClass = () => {
        if (disabled) {
            return "bg-lightGray text-darkGray cursor-not-allowed";
        }

        switch (variant) {
            case "primary":
                return "bg-primary text-white";
            case "secondary":
                return "border border-primary text-primary bg-white";
            default:
                return "bg-primary text-white";
        }
    };

    const buttonIcon = () => {
        switch (icon) {
            case "share":
                return <IoMdSend />;
            default:
                return null;
        }
    };

    return (
        <button
            className={`w-full rounded-sm p-2 shadow-md font-semibold flex items-center justify-center ${paramClass} ${buttonClass()}`}
            disabled={disabled}
            onClick={onClick}
        >
            <span className="flex items-center gap-2">
                {label}
                {buttonIcon()}
            </span>
        </button>
    );
};

export default Button;
