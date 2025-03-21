'use client'

import React, { useRef } from 'react'
import { Sheet, SheetRef, } from 'react-modal-sheet';

const CE_BottomDrawerPan = ({ children, isOpen, close }: { isOpen: boolean, close: () => void, children: React.ReactNode }) => {
    const ref = useRef<SheetRef>();

    return (
        <Sheet
            ref={ref}
            isOpen={isOpen}
            onClose={() => close()}
            initialSnap={1}
            detent='content-height'
        >
            <Sheet.Container>
                <Sheet.Header style={{ padding: '0px' }} />
                <Sheet.Content>
                    <Sheet.Scroller>
                        {children}
                    </Sheet.Scroller>
                </Sheet.Content>
            </Sheet.Container>
            {/* <Sheet.Backdrop /> */}
        </Sheet>
    )
}

export default CE_BottomDrawerPan