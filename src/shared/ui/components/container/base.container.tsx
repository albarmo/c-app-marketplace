import React from 'react'

interface I_PropsBaseContainer {
    children: React.ReactNode
}
export default function BaseContainer({ children }: I_PropsBaseContainer) {
    return (
        <div className='w-screen overflow-hidden space-y-5'>
            {children}
        </div>
    )
}
