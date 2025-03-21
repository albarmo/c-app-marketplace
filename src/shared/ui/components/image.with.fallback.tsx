'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FALLBACK_IMAGE } from '@/registry/constant'

interface I_ImageWithFallbackProps {
    src: string
    fallbackSrc?: string
    alt: string
    width: number
    height: number
    className?: string
}

const ImageWithFallback = (props: I_ImageWithFallbackProps) => {
    const [displayImage, setDisplayImage] = useState<string>(props.src)
    const fallbackImage = props.fallbackSrc ?? FALLBACK_IMAGE

    return (
        <Image
            src={displayImage}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className={props?.className}
            onError={() => {
                setDisplayImage(fallbackImage)
            }}

        />
    )
}

export default ImageWithFallback