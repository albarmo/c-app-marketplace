import React from 'react'
import FieldGenerator from '../field.generator'
import { FieldErrors } from 'react-hook-form';

export type FieldType = 'text' | 'textarea' | 'number' | 'date' | 'radio' | 'file' | 'select' | "checkbox" | "password" | "custom"
export type Field = {
    key: string
    label: string
    placeholder?: string
    type: FieldType | string
    options?: { label: string, value: string | number }[]
    validation?: {
        isRequired?: boolean
        regex?: string
        min?: number
        max?: number
    }
    icon?: React.ReactNode
    rows?: number
    component?: React.ReactNode
}
interface IProps_Form {
    id: string
    fields: Field[]
    errors?: FieldErrors
}

export default function Form({ id, fields, errors }: IProps_Form) {
    return (
        <form id={id} className='flex flex-col gap-4 w-full pb-6'>
            {/* FormFields */}
            {fields.map((field) =>
                <section key={field.key} className='flex flex-col gap-2'>
                    {field.label && (
                        <label htmlFor={field.key} className='text-xs font-semibold'>
                            {field.label} {field.validation?.isRequired && <span className="text-red-600">*</span>}
                        </label>
                    )}
                    <FieldGenerator key={field.key} field={field} />
                    {errors?.[field.key] && (
                        <p className="text-xs text-red-600">{errors[field.key]?.message as string}</p>
                    )}
                </section>
            )}
        </form>
    )
}