'use client'

import React from 'react'
import ImageWithFallback from '../components/image.with.fallback'
import Link from 'next/link'
import { SVG_ChevronLeft, SVG_ChevronRight } from '@/shared/svg/svg.chevron'
import { IRs_PaginateCategory } from '@/api/services/discovery/api.paginate.category'
import useDisclosure from '@/shared/hooks/useDisclosure'

interface I_PropsCategoryContainer {
    categories: IRs_PaginateCategory
}
export default function CategoryContainer({ categories }: I_PropsCategoryContainer) {
    const { isOpen, open, close } = useDisclosure(false)
    return (
        <div className='space-y-5 mx-1'>
            <section className="grid w-full grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-5">
                {categories?.data?.items?.map((category: Category, index: number) =>
                    <Link key={category.id} href={category.id ?? '/'} className={!isOpen && index >= 4 ? 'hidden' : 'flex flex-col items-center justify-start space-y-2 max-w-28'}>
                        <ImageWithFallback src={category?.image as string} alt={category?.name} width={200} height={200} className='object-cover bg-[#F8F9F9] size-16 aspect-square rounded-full' />
                        <h1 className='line-clamp-2 text-center font-semibold leading-6'>{category?.name}</h1>
                    </Link>
                )}
            </section>
            <div className='flex justify-center items-center'>
                {isOpen ?
                    <button onClick={() => close()} className='text-primary text-md font-bold flex items-center'>Tutup <SVG_ChevronLeft className='rotate-90' /></button> :
                    <button onClick={() => open()} className='text-primary text-md font-bold flex items-center'>Lihat Lebih Banyak <SVG_ChevronRight className='rotate-90' /></button>
                }
            </div>
        </div >
    )
}
