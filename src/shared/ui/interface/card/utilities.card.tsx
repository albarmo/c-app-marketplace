"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface I_PropsUtilitiesCard {
    data: {
        id: string
        title: string
        image: string
        background: string,
        path: string
    }
}
export default function UtilitiesCard({ data }: I_PropsUtilitiesCard) {
    const router = useRouter()

    const redirectPage = () => {
        router.push(data.path)
    }
    return (
        <article 
            className={`bg-[${data?.background}] h-max overflow-hidden w-full rounded-xl border flex items-start justify-between p-3.5 text-lg font-semibold`} 
            onClick={redirectPage}
        >
            {data?.title}
            <Image src={data?.image} alt={data?.title} width={60} height={60} className='ml-5 h-20 object-contain' />
        </article>
    )
}
