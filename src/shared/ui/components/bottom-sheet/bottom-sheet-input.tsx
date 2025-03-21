"use client"

import React, { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import CustomInput from "../input/input";

interface BottomSheetProps {
    data?: any;
    handleUpdate: (val: any) => void;
    title?: string;
    placeholder?: string;
    handleClose?: () => void;
    inputName: string;
}


const BottomSheet: React.FC<BottomSheetProps> = ({ data, inputName, title, placeholder, handleUpdate, handleClose }) => {
    const defaultValue = data[inputName]
    const [newData, setNewData] = useState(data)
    const [input, setInput] = useState(defaultValue)

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target

        setInput(value)
        setNewData({ ...data, [name]: value })
    }

    return (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50">
            <div className="w-screen absolute bottom-0 bg-white">
                <div className="w-full p-4 flex justify-between items-center">
                    <p className="font-bold">{title}</p>
                    <RiCloseLargeFill onClick={handleClose} />
                </div>
                <div className="w-full p-4 border border-x border-lightGray">
                    <CustomInput
                        id={inputName}
                        name={inputName}
                        className="w-full border-gray-300"
                        placeholder={placeholder}
                        onChange={handleChangeInput}
                        value={input}
                    />
                </div>
                <div className="p-4">
                    <button
                        className={`w-full p-2 font-bold rounded-md ${input ? "bg-primary text-white" : "bg-secondary text-darkGray"}`}
                        onClick={() => handleUpdate(newData)}
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    )
};

export default BottomSheet;
