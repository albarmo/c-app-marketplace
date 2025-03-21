'use client'

import React from 'react'
import { SVG_Search } from '@/shared/svg/svg.search'
import debounce from '@/lib/debouncer'
interface I_PropsSearchInput {
    id: string
    onChangeAction?: (keyword: string) => void
    onFocusAction?: (isFocus: boolean) => void
    placeholder: string
    defaultValue?: string
    className?: string
}

export default function CE_SearchInput({ id, onChangeAction, onFocusAction, placeholder = "Cari di", defaultValue, className }: I_PropsSearchInput) {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target?.value;
        onChangeAction && onChangeAction(value)
    };

    const handleSearch = debounce(handleSearchChange, 500)

    return (
        <div id={id} className='relative max-h-12 w-full'>
            <SVG_Search className='absolute size-6 left-3 top-3' />
            <input
                type='text'
                defaultValue={defaultValue}
                onChange={handleSearch}
                onFocus={() => onFocusAction && onFocusAction(true)}
                className={`w-full h-12 rounded-lg p-1.5 pl-11 pr-5 focus:outline-none focus:ring-primary/50 focus:ring-4 peer ${className}`}
                placeholder={placeholder}
            />
        </div>
    )
}