
import React from 'react'
import Image from 'next/image'

interface I_PropsCategoryCard {
    data: {
        id: string
        title: string
        image: string
    }
}

export default function CategoryCard({ data: { id, title, image } }: I_PropsCategoryCard) {

    return (
        <article id={id} className='relative border h-28 w-full rounded-xl z-0 overflow-hidden p-3.5'>
            <Image className='absolute size-max object-cover -z-10 scale-150 blur-3xl  opacity-90' src={image} alt={title} width={100} height={100} />
            <h1 className='font-bold text-xl z-10'>{title}</h1>
            <Image className='absolute -bottom-8 -right-12 size-36 object-cover opacity-90 -z-10' src={image} alt={title} width={100} height={100} />
        </article>
    )
}
