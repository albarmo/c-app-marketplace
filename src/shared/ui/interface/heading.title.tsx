import Link from 'next/link'
import React from 'react'

interface I_PropsHeadingTitle {
    title: string,
    detail?: {
        text: string
        path: string
    }
    badge?: {
        text: string
    }
}

export default function HeadingTitle({ title, detail, badge }: I_PropsHeadingTitle) {
    return (
        <section className='flex justify-between items-center py-2.5'>
            <h1 className='font-semibold text-lg'>{title} {badge?.text ? <span className='rounded-full bg-gradient-to-r from-[#E1423E] to-[#FF7A00] p-1 px-2.5 text-sm font-semibold text-white'>{badge.text}</span> : null}
            </h1>
            {detail?.path ? <Link href={detail?.path} className='text-primary font-bold'>{detail?.text}</Link> : null}
        </section>
    )
}
