import React from 'react'
import { SVG_PlusCircle } from '@/shared/svg/svg.plus.circle'
import { SVG_Withdraw } from '@/shared/svg/svg.withdraw'
import { SVG_CurrenceyRupiah } from '@/shared/svg/svg.money'

export default function CoinBalance() {
    return (
        <div className='h-max w-full rounded-xl bg-white p-5 shadow'>
            <div className='flex justify-between items-center'>
                <section>
                    <p className='text-sm font-semibold text-gray-500'>
                        Total Saldo
                    </p>
                    <p className='flex items-center justify-center'>
                        <SVG_CurrenceyRupiah color='yellow' className='mr-1.5 size-4' /> <span className='text-xl font-bold'>200.000</span>
                    </p>
                </section>
                <section className='flex space-x-5'>
                    <button className='flex flex-col justify-center items-center space-y-2'>
                        <SVG_Withdraw color='primary' className='mr-1.5 bg-blue-200/50 rounded-full size-8 p-1.5' />
                        <span className='text-sm font-semibold text-primary'>Tarik Saldo</span>
                    </button>
                    <button className='flex flex-col justify-center items-center space-y-2'>
                        <SVG_PlusCircle color='primary' className='mr-1.5 bg-blue-200/50 size-8 p-1.5 rounded-full' />
                        <span className='text-sm font-semibold text-primary'>Top Up</span>
                    </button>
                </section>
            </div>
        </div>
    )
}
