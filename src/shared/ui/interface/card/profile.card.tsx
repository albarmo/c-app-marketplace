import Link from 'next/link'
import React from 'react'
import ImageWithFallback from '../../components/image.with.fallback'

interface I_PropsStore {
    data: {
        id: string
        name: string
        image: string | null,
        url?: string
    }
}

export default function ProfileCard({ data: { name, image, url } }: I_PropsStore) {
    return (
        <Link href={url ?? '/'} className='snap-center flex flex-col items-center justify-center space-y-2 p-3.5 h-max min-w-28 bg-gray-50 rounded-lg'>
            <ImageWithFallback src={image as string} alt={name} width={200} height={200} className='object-contain size-20 rounded-full aspect-square border' />
            <h1 className='line-clamp-2 text-center'>{name}</h1>
        </Link>
    )
}
