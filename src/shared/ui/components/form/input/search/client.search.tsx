import React from "react";

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search...", value, onChange }) => {
    return (
        <div className="relative w-full max-w-md">
            {/* Icon Search */}
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16 10A6 6 0 1 1 4 10a6 6 0 0 1 12 0z" />
                </svg>
            </div>

            {/* Input Field */}
            <input 
                type="text" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}

export default SearchInput;
