import React from 'react'
import Image from 'next/image'

const Loading = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-[#DFEBF6]">
            <Image
                className="animate-pulse"
                src="/images/localoka-logo.png"
                alt="Vercel logomark"
                width={200}
                height={200}
            />
        </div>
    )
}

export default Loading