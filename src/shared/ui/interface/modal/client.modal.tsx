'use client'
import { SVG_SidebarOrderCreate } from '@/shared/svg/svg.sidebar'
import React from 'react'
``
interface IProps_Modal {
    isOpen: boolean
    closeAction: () => void
    title: string
    children: React.ReactNode
    variant: 'form' | 'status' | 'dialog'
    status?: 'success' | 'failed'
    buttonTitle?: string
    onConfrimAction?: Function
    closeable: boolean
}

const ButtonCloseModal = ({ isCloseable, close }: { isCloseable: boolean, close: () => void }) => {
    if (!isCloseable) return
    return (
        <button type="button" onClick={() => close()} className="end-2.5 ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
            <svg className="size-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
        </button>
    )
}

export default function CE_Modal({ isOpen, closeAction, title, children, variant, status, buttonTitle = 'Tutup', onConfrimAction, closeable = true }: IProps_Modal) {
    if (!isOpen) return null

    switch (variant) {
        case 'form':
            return (
                <div id="authentication-modal" aria-hidden="true" className="fixed inset-x-0 top-0 z-50 flex h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900/30 md:inset-0">
                    <div className="relative max-h-full w-full max-w-lg p-4">
                        {/* <!-- Modal content --> */}
                        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            {title ?
                                <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-2.5">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {title}
                                    </h3>
                                    <ButtonCloseModal isCloseable={closeable} close={closeAction} />
                                </div>
                                :
                                <ButtonCloseModal isCloseable={closeable} close={closeAction} />
                            }
                            {/* <!-- Modal body --> */}
                            <div className="p-4 md:p-5">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'status': {
            const statusColor = {
                success: 'bg-blue-200 text-primary',
                failed: 'bg-red-200 text-red-600',
                default: 'bg-gray-200 text-gray-600'
            }

            const onCLoseAction = () => {
                onConfrimAction && onConfrimAction()
                closeAction()
            }

            return (
                <div id="authentication-modal" aria-hidden="true" className="fixed inset-x-0 top-0 z-50 flex h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900/30 md:inset-0">
                    <div className="relative max-h-full w-full max-w-sm p-5">
                        {/* <!-- Modal content --> */}
                        <div className="relative overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700">
                            <ButtonCloseModal isCloseable={closeable} close={closeAction} />
                            {/* <!-- Modal body --> */}
                            <div className="flex flex-col items-center justify-center p-4 text-center md:p-5">
                                <SVG_SidebarOrderCreate className={`${statusColor?.[status ?? 'default']} mb-5 size-12 rounded-full p-2.5`} />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {title}
                                </h3>
                                <p className='font-light text-gray-500'>
                                    {children}
                                </p>
                                <button
                                    type="button"
                                    className="mt-5 w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white    focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => onCLoseAction()}
                                >
                                    {buttonTitle}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        case 'dialog': {
            const onConfrim = () => {
                onConfrimAction ? onConfrimAction() : closeAction()
                closeAction()
            }
            return (
                <div id="authentication-modal" aria-hidden="true" className="fixed inset-x-0 top-0 z-50 flex h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900/30 md:inset-0">
                    <div className="relative max-h-full w-full max-w-md p-4">
                        {/* <!-- Modal content --> */}
                        <div className="relative overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700">
                            {/* <!-- Modal body --> */}
                            <div className="p-4 md:p-5">
                                <h2 className="text-lg text-center py-1.5 font-bold text-gray-800 dark:text-white">
                                    {title}
                                </h2>
                                {children}
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="flex items-center justify-between border-gray-200 bg-gray-50 p-4 dark:border-gray-600 md:p-2.5">
                                <button onClick={() => closeAction()} data-modal-hide="default-modal" type="button" className="w-full h-11 rounded-lg border border-primary bg-white px-5 py-1.5 text-sm font-semibold text-primary hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">Batal</button>
                                <button onClick={() => onConfrim()} data-modal-hide="default-modal" type="button" className="w-full h-11 ms-2.5 rounded-lg bg-primary px-5 py-1.5 text-center font-semibold text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Hapus</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
