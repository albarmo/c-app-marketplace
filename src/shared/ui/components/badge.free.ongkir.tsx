import React from 'react'
import { SVG_Verified } from '@/shared/svg/svg.verified'

interface I_PropsBadgeFreeOngkir {
    text?: string
    color: string
}

export default function BadgeFreeOngkir({ text = "Bebas Ongkir", color }: I_PropsBadgeFreeOngkir) {
    return (
        <section className={`text-[${color}] flex items-center`}>
            <SVG_Verified color='green' className='mr-1' /> {text}
        </section>
    )
}
