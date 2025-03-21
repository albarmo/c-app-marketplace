'use client'

import React, { Fragment } from 'react'
import CE_BottomDrawerPan from './client.bottom.drawer.pan';
import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import { cn } from '@/styles/cn';

const CE_AdaptiveModal = ({ isOpen, close, children, className = "" }: { isOpen: boolean, close: () => void, children: React.ReactNode, className?: string }) => {
    const { width } = useWindowDimensions();

    if (!isOpen) return <></>

    return (
        <Fragment>
            {width <= 640 ?
                <CE_BottomDrawerPan key="bottom-drawer" isOpen={isOpen} close={close} >
                    {children}
                </CE_BottomDrawerPan>
                :
                <div key="default-modal" className={cn(
                    !isOpen ? "hidden" : "fixed inset-x-0 top-0 z-50 flex h-screen max-h-full w-full items-center justify-center overflow-hidden bg-black/60 md:inset-0",
                )}>
                    <div className={cn("absolute bottom-0 max-h-full w-full max-w-96 md:relative", className)}>
                        <div className="relative rounded-2xl bg-white pt-5 shadow">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default CE_AdaptiveModal