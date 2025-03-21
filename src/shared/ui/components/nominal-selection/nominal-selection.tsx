"use client"
import { useState, Fragment } from "react";

const nominalOptions = [
  { value: "20000", label: "20.000", optClass: "text-lg" },
  { value: "50000", label: "50.000", optClass: "text-lg" },
  { value: "100000", label: "100.000", optClass: "text-lg" },
  { value: "200000", label: "200.000", optClass: "text-lg" },
  { value: "500000", label: "500.000", optClass: "text-lg" },
  { value: "1000000", label: "1.000.000", optClass: "text-lg" },
  { value: "5000000", label: "5.000.000", optClass: "text-lg" },
  { value: "10000000", label: "10.000.000", optClass: "text-lg" },
  { value: "other", label: "Nominal Lain", optClass: "text-sm text-center", key: "other" },
];

const NominalSelection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md mx-auto">
        <div className="font-semibold text-gray-500 py-4">Nominal (Rp)</div>
        <div className="grid grid-cols-3 gap-3">
            {nominalOptions.map((option) => (
            <label
                key={option.value}
                className={`flex items-center justify-center border rounded-md p-4 cursor-pointer text-gray-600 font-semibold ${option.optClass}
                ${
                    selected === option.value
                    ? "border-primary text-primary font-bold"
                    : "border-gray-300"
                }
                `}
            >
                <input
                    type="radio"
                    name="nominal"
                    value={option.value}
                    className="hidden"
                    onChange={() => setSelected(option.value)}
                />
                {option.label}
            </label>
            ))}
        </div>

        <div className="py-10">
            <div className="flex flex-col w-full py-4 px-2 border-b border-t border-gray-400 bg-white focus:outline-none gap-1">
                <div className="text-sm font-semibold">Masukkan Nominal Lain</div>
                <input type="number" placeholder="0" className="p-2 focus:outline-primary"></input>
            </div>
        </div>
    </div>
  );
};

export default NominalSelection;
