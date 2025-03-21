import React from 'react'
interface I_PropsHighlightContainer {
    title: string
    children: React.ReactNode
}
export default function HighlightContainer({ title, children }: I_PropsHighlightContainer) {
    return (
        <div className='w-full relative space-y-1.5 bg-gradient-to-b from-[#E4F3DE]/50 to-[#E4F3DE] px-3.5'>
            {title ?
                <section className='absolute left-5 -top-6 bg-[#7AC35B] w-max px-2.5 py-2.5 rounded-b-xl text-white font-extrabold uppercase italic'>
                    <div className="triangle-right absolute -left-6 top-0 "></div>
                    <span>
                        {title}
                    </span>
                </section>
                : null
            }

            <div className='py-5'>
                {children}
            </div>
        </div>
    )
}
