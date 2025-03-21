import { SVG_Search } from '@/shared/svg/svg.search'
import Link from 'next/link'
import React from 'react'
import { FaHistory, FaSearch } from 'react-icons/fa'

interface I_PropsSaerchPage {
    isVisible: boolean
    data: Array<Catalogue> | null
    error: string | null
}
export default function SearchPage({ isVisible, data, error }: I_PropsSaerchPage) {
    if (!isVisible) return <></>

    return (
        <div className='w-full h-lvh bg-white p-3.5 text-lg text-gray-700'>
            <p className={error ? "py-3.5 font-medium text-left line-clamp-2 h-max" : "hidden"}>{error}</p>
            <ul className='space-y-3.5'>
                {data?.map((catalog, index) =>
                    <Link
                        key={index}
                        href={`/search?q=${catalog?.product?.name}`}
                        className='flex items-start justify-start space-x-1'>
                        <SVG_Search className='size-5 text-xl mt-1 text-gray-600 mr-2' />
                        <p className='w-11/12'>{catalog?.product?.name}</p>
                    </Link>
                )}
            </ul>
        </div>
    )
}
