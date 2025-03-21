import React from 'react'

interface I_PropsCarouselList {
    children: React.ReactNode,
    classname?: string
}
export default function CarouselList({ children, classname }: I_PropsCarouselList) {
    return (
        <div className={`carousel-mask-container inline-flex w-screen snap-x snap-proximity flex-nowrap space-x-5 overflow-x-scroll px-6 ${classname}`}>
            {children}
        </div>
    )
}
