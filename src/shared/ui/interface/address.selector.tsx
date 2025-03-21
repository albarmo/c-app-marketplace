import { SVG_PinLocation } from '@/shared/svg/svg.pin.location'
import React from 'react'
import SelectInput from '../components/input/select'

export default function AddressSelector() {
    return (
        <section className='flex space-x-1 items-center text-md text-white'>
            <SVG_PinLocation color='white' className='size-5' />
            <span className='mr-1.5'>Dikirim ke</span>
            <SelectInput id='select-shipping-address' variant='ghost' options={[{ label: "Rumah", value: "1" }, { label: "Kantor", value: "2" }]} defaultValue={'1'} placeholder='Alamat Tersimpan' />
        </section>
    )
}
