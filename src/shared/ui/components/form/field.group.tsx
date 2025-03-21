import React from 'react'

const FieldGroup = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='space-y-3.5 p-3.5 py-5 '>
            {children}
        </section>
    )
}

export default FieldGroup