import React from 'react'
import Link from 'next/link';
import BadgeFreeOngkir from '../../components/badge.free.ongkir';
import ImageWithFallback from '../../components/image.with.fallback';

const _CardSize = {
    small: 'h-max min-w-36',
    medium: 'h-max max-h-60 min-w-40',
    large: 'h-max max-h-72 min-w-56'
}

interface I_PropsProductCard {
    size: keyof typeof _CardSize;
    data: Product
}
export default function ProductFlashSaleCard({ size = 'small', data }: I_PropsProductCard) {
    return (
        <Link href={`/product/${data?.id}`} className={`${_CardSize[size]} snap-center rounded-xl bg-white shadow overflow-hidden`} >
            <ImageWithFallback className='h-28 object-cover' src={data?.image} alt={data?.name} width={500} height={500} />
            <div className='p-2.5 text-sm space-y-1.5'>
                <h1 className='font-base line-clamp-3'>{data?.name}</h1>
                <h2 className='text-primary text-lg font-semibold'>Rp 15.000 <span className='text-gray-600 text-sm font-light'>/Sisir</span></h2>
                <BadgeFreeOngkir color={'#7AC35B'} />
                <div className='relative w-full h-2 bg-[#F0F0F0] rounded-full'>
                    <section className='absolute left-0 top-0 w-1/3 h-2 bg-[#E1423E] rounded-full' />
                </div>
                <p className='text-gray-500 font-semibold'>Sisa Stock 20</p>
            </div>
        </Link>
    )
}
