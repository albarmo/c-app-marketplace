'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SVG_CartOutline } from '@/shared/svg/svg.cart'
import { SVG_ChatOutline } from '@/shared/svg/svg.chat'
import { SVG_NotificationOutlined } from '@/shared/svg/svg.notification'
import CE_SearchInput from '../../components/input/search.input'
import AddressSelector from '../address.selector'
import CoinBalance from '../coin.ballance'
import { useScrollPosition } from '@/shared/hooks/useScrollPosition'
import SearchPage from '../../pages/search.page'
import { API_SearchProduct } from '@/api/services/discovery/api.search.paginate'
import { SVG_ArrowLeft } from '@/shared/svg/svg.arrow'

export default function HomepageHeader() {
    const [keyword, setKeyword] = useState<string | null>(null)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [isCompact, setIsCompact] = useState(true)

    useScrollPosition(
        ({ currPos }) => {
            const isScrolled = currPos.y === 0
            setIsCompact(isScrolled)
        },
        [isCompact]
    )

    const [searchResult, setSearchResult] = useState<Catalogue[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleSearchProduct = async (keyword: string): Promise<void> => {
        const response = await API_SearchProduct({
            page: 1,
            limit: 10,
            sort: "asc",
            field: "createdAt",
            filter: {
                search: keyword,
            }
        })

        if (response.code === 200) {
            setSearchResult(response?.data.items)
        }
        else if (response.code === 404) {
            setSearchResult(null)
            setError(`Pencarian "${keyword}" tidak dapat ditemukan`)
        }
        else {
            setSearchResult(null)
            setError(response.message)
        }
    }

    useEffect(() => {
        if (!keyword) setError(null)
        handleSearchProduct(keyword || "")
    }, [keyword])

    return (
        <div className={`${isCompact && !isSearching ? "rounded-b-xl h-44" : "h-20"} sticky top-0 left-0 z-40 bg-primary transition-all transform-gpu delay-100 duration-400`}>
            <div className='flex p-3.5 w-full h-max items-center justify-between space-x-6'>
                {isSearching ? <button onClick={() => setIsSearching(false)}><SVG_ArrowLeft color='white' /></button> : null}
                <CE_SearchInput key='input-search-header' onChangeAction={setKeyword} onFocusAction={setIsSearching} id='input-search-homepage' placeholder="Cari di Localoka" />

                {!isSearching ?
                    <section className='grid grid-cols-3 gap-x-5 w-40'>
                        <Link href={'/cart'}><SVG_CartOutline color='white' className='size-6' /></Link>
                        <Link href={'/'}><SVG_ChatOutline color='white' className='size-6' /></Link>
                        <Link href={'/'}><SVG_NotificationOutlined color='white' className='size-6' /></Link>
                    </section>
                    :
                    <Link href={'/search'} className='font-semibold text-white'>Cari</Link>
                }
            </div>
            <div className={`${isCompact && !isSearching ? 'relative translate-x-0 h-24' : '-translate-x-full h-0'} transition-all z-10 transform-gpu delay-0 duration-200`}>
                <div className='px-3.5'>
                    <AddressSelector />
                </div>
                <section className='w-full px-3.5 h-max absolute -bottom-1/2'>
                    <CoinBalance />
                </section>
            </div>
            <SearchPage isVisible={isSearching} data={searchResult} error={error} />
        </div>
    )
}
