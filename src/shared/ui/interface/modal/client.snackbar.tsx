'use client'
import React, { useEffect, useState } from 'react'
import useDisclosure from '@/shared/hooks/useDisclosure'
import { Emit_OpenSnackbar, globalEmitter } from '@/lib/emitter/GlobalEmitter'
import { PiWarningCircleFill } from "react-icons/pi"
import { IoMdClose } from "react-icons/io"
import { FaCircleCheck } from "react-icons/fa6"


export default function CE_Snackbar() {
    const { isOpen, open, close } = useDisclosure()
    const [data, setData] = useState<Emit_OpenSnackbar | null>()

    useEffect(() => {
        if (!isOpen) {
            globalEmitter.remove('openSnackbar')
            globalEmitter.remove('closeSnackbar')
        }

        globalEmitter.on('openSnackbar', (payload) => {
            setData(payload)
            open();

            setTimeout(() => {
                close()
                setData(null)
            }, 3000)
        });

        globalEmitter.on('closeSnackbar', ({ onClose }) => {
            onClose && onClose()
            close();

            setData(null)
        });
    }, [open, close, isOpen])

    if (!isOpen) return null

    switch (data?.status) {
        case 'error': {
            return (
                <div className='fixed bottom-20 flex justify-center items-start z-[9999] m-2.5'>
                    <div className='w-62 bg-[#F9CFCF] py-3 px-4 flex justify-between items-center rounded-xl space-x-2'>
                        <PiWarningCircleFill fontSize={25} color='#E84040' />
                        <p className='w-11/12'>{data?.message}</p>
                        <IoMdClose onClick={close} fontSize={20} color='#E84040' />
                    </div>
                </div>
            )
        }

        case 'success': {
            return (
                <div className='fixed bottom-20 flex justify-center items-start z-[9999] m-2.5'>
                    <div className='w-62 bg-[#C2F1D6] py-3 px-4 flex justify-between items-center rounded-xl space-x-2'>
                        <div><FaCircleCheck fontSize={25} color='#27AE60' /></div>
                        <div className='w-11/12'>{data?.message}</div>
                        <div><IoMdClose onClick={close} fontSize={20} color='#27AE60' /></div>
                    </div>
                </div>
            )
        }
    }
}
