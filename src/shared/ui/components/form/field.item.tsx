import React from 'react'

const FieldItem = ({ id, children }: { id: string, children: React.ReactNode }) => {
    return (
        <section id={id} className='space-y-1.5'>
            {children}
        </section>
    )
}

export default FieldItem