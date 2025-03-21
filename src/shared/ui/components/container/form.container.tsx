import React from 'react'

interface I_PropFormContainer {
    children: React.ReactNode
}
export default function FormContainer({ children }: I_PropFormContainer) {
    return (
        <div className='flex-grow p-4'>
            {children}
        </div>
    )
}
