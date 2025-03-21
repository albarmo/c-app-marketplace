'use client'

import React from 'react'

interface I_PropsSelectInput {
    id: string
    variant: 'base' | 'ghost'
    options: Array<T_SelectOptions>
    defaultValue?: string
    placeholder: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const _SelectVariant = {
    base: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    ghost: 'bg-transparent font-semibold focus:ring-0 focus:border-none block text-white'
}

export default function SelectInput({ id, variant, options, placeholder = "Pilih opsi", value, onChange }: I_PropsSelectInput) {
    return (
        <select
            id={id}
            className={`${_SelectVariant[variant]}`}
            value={value}
            onChange={onChange}
        >
            <option value="">{placeholder}</option>

            {options?.map((opt, index) => <option className='w-min' key={opt.value + index} value={opt.value}>{opt.label}</option>)}
        </select>
    )
}
