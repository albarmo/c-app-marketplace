'use client'

import React, { Fragment } from 'react'
import useDisclosure from '@/shared/hooks/useDisclosure'

interface I_PropsAccordionItem {
    title: string
    children: React.ReactNode
}

export default function AccordionItem({ title, children }: I_PropsAccordionItem) {
    const { isOpen, open, close } = useDisclosure(true)

    const toggle = () => {
        isOpen ? close() : open()
    }

    return (
        <Fragment>
            <h2 id="accordion-open-heading-1" onClick={() => toggle()}>
                <button type="button" className="flex items-center justify-between w-full p-2.5 font-medium rtl:text-right text-gray-500 border border-x-0 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                    <span className="flex text-foreground font-semibold items-center">{title}</span>
                    <svg data-accordion-icon className={`${isOpen ? 'rotate-0' : 'rotate-180'} w-3 h-3 shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-open-body-1" className={`${isOpen ? 'visible' : 'hidden'} transition-all transform-gpu delay-75`} aria-labelledby="accordion-open-heading-1">
                {children}
            </div>
        </Fragment>
    )
}
