import { currency } from '@/shared/func/currency.format'
import React from 'react'

export default function DiscountBadge({ discount }: { discount: { type?: 'percentage' | 'fixed', value?: string | number } }) {
    if (!discount) return <></>

    return (
        <section className='absolute top-2 right-2 h-min w-max text-xs bg-[#FEE97A] p-2.5 py-1.5 rounded-lg font-semibold text-[#EB3813]'>
            {discount.type === "percentage" ? `Disc.${discount.value}%` : currency(discount?.value || 0)}
        </section>
    )
}
