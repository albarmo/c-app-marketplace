import React from 'react'
import Link from 'next/link';
import { currency } from '@/shared/func/currency.format';
import ImageWithFallback from '../../components/image.with.fallback';
import { SVG_Checkmark } from '@/shared/svg/svg.checkmark';
import { SVG_Star } from '@/shared/svg/svg.star';

const _CardSize = {
    small: 'h-max min-w-32 max-w-32',
    medium: 'h-max min-w-32',
    large: 'h-max max-h-72 min-w-56'
}

export const ProductCardSkeleton = ({ size }: { size: 'small' | 'medium' | 'large' }) => {
    return (
        <div className={`${_CardSize[size]} snap-center rounded-xl bg-white shadow overflow-hidden`} >
            <div className='relative'>
                <div className='h-36 bg-gray-200 animate-pulse' />
                <section className='absolute top-2 right-2 h-5 w-10 text-xs bg-gray-100 p-2.5 py-1.5 rounded-lg font-semibold text-[#EB3813] animate-pulse' />
            </div>
            <div className='p-2.5 text-sm space-y-1'>
                <div className='font-base text-md w-11/12 h-5 bg-gray-200 rounded animate-pulse' />
                <div className='text-gray-300 font-medium text-xs line-through h-5 bg-gray-200 w-20 rounded animate-pulse' />
                <div className='text-sm w-full h-5 bg-gray-100 rounded animate-pulse' />
            </div>
        </div>
    )
}

interface I_PropsProductCard {
    size: keyof typeof _CardSize;
    data: Catalogue
}

export default function ProductCard({ size = 'small', data }: I_PropsProductCard) {
    const product = data?.product as Product
    const seller = data?.seller

    if (!product) {
        return <ProductCardSkeleton size={size} />
    }

    const discount = product?.discount

    return (
        <Link href={`/product/${product?.id}`} className={`${_CardSize[size]} relative snap-center space-y-2.5`} >
            <div className='relative'>
                <ImageWithFallback
                    src={product?.image}
                    alt='Buah Segar'
                    fallbackSrc='https://s3-alpha-sig.figma.com/img/2f99/0547/fe7c25d0b7ec2587012202089318e9e2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OkR8yJszHeIfQ4e7UPXpnfZLvxs87MHhplwqIBXLIf1Vot3ucmfKzLnNYia~cdXfNQ6m3lDPxri97IFPBMPORPLapbevicDgLzuUtZxDdGFvIZyjIm2qqerZ1a7sN2Sh81bnd7sHA4yV~Cm7AwA0pKk0uLB~1Z6pz6op7oWe9ZUPRgiXKiENKAEMnmEkfM4jab50e-l3uzEL3N7V2hb2Uqi6P-vPp~8Vi~-QETT14I8J4FiF7lP3foQogiqEzGAB4nW1pLkxVqNeulE39ZCSEprGru4PGNB-6BksWPb5CN2fdaYj6G9xQZ~FWqPfRsv4Scxju~MG7-ZwVbPy7dTdAQ__'
                    width={500}
                    height={500}
                    className=' rounded-lg object-cover aspect-square'
                />
            </div>
            <div className='text-sm space-y-1'>
                <h1 className='font-base text-md line-clamp-2'>{product?.name}</h1>
                <h2 className={product?.priceBeforePromo ? 'text-gray-400 font-medium text-sm line-through' : "hidden"}>{currency(product?.priceBeforePromo)}</h2>
                <section className='flex justify-between w-full'>
                    <h2 className='text-md font-semibold line-clamp-3 text-[#292929]'>{currency(product?.price)}</h2>
                </section>
                <section className='flex items-start text-xs line-clamp-1'>
                    <SVG_Star color='yellow' className='mr-1 size-4' /><p className='text-xs text-[#929393]'>4.9 • 12rb terjual</p>
                </section>

                {discount ?
                    <svg className='absolute -left-2.5 top-1.5' width="50" height="30" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4C0 1.79086 1.79086 0 4 0H26C28.2091 0 30 1.79086 30 4V12C30 14.2091 28.2091 16 26 16H0V4Z" fill="#E84040" />
                        <path d="M0 16H6V20L2.42536 19.1063C0.999957 18.75 0 17.4693 0 16V16Z" fill="#B61616" />
                        <text y="11" x="6" fill='white' className='text-[10px] font-semibold text-right '>
                            {discount?.type === "percentage" ? `${discount?.value}%` : currency(discount?.value || 0)}
                        </text>
                    </svg> : null
                }

                <section className={seller?.name ? 'my-1.5 space-y-1.5 text-gray-600' : 'hidden'}>
                    <section className='flex items-start'>
                        <SVG_Checkmark color='dark-gray' className='mr-1 size-4' />
                        <p className='text-xs capitalize line-clamp-2'>{seller.name}</p>
                    </section>
                    <p className='text-xs line-clamp-2'>{seller.location}</p>
                </section>
            </div>
        </Link >
    )
}
