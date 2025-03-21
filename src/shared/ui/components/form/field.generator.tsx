"use client";
import React, { Fragment, useState } from 'react';
import { Field } from './input/client.form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FieldError } from 'react-hook-form';

interface IProps_FieldGenerator {
    field: Field;
    error?: FieldError;
}

export default function FieldGenerator({ field, error }: IProps_FieldGenerator) {
    const [showPassword, setShowPassword] = useState(false);

    if (field.type === "custom" && field.component) {
        return (
            <div className="flex flex-col gap-1">
                {field.component}
            </div>
        );
    }
    switch (field.type) {
        case 'text':
            return (
                <Fragment>
                    <div className="relative w-full">
                        {field.icon && (
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                {field.icon}
                            </div>
                        )}
                        <input
                            type="email"
                            className={`border w-full py-2 rounded-sm focus:outline-blue-300 focus:shadow-outline ${field.icon ? 'pl-10 pr-3' : 'px-3'}`}
                            placeholder={field.placeholder}
                        />
                    </div>
                </Fragment>
            );
        case 'password':
            return (
                <div className="relative w-full">
                    {field.icon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {field.icon}
                        </div>
                    )}
                    <input
                        type={showPassword ? "text" : "password"}
                        className={`border w-full py-2 rounded-sm focus:outline-blue-300 focus:shadow-outline ${field.icon ? 'pl-10' : 'px-3'} pr-10`}
                        placeholder={field.placeholder}
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            );
        case "textarea":
            return (
                <textarea
                    id={field.key}
                    className="w-full h-24 border rounded-sm p-2.5 focus:outline-blue-300 focus:shadow-outline"
                    placeholder={field.placeholder}
                    rows={field.rows ?? 4}
                />
            );
        case 'select':
            return (
                <section >
                    <select id="countries" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                        <option>{field.placeholder}</option>
                        {field?.options?.map((opt) =>
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        )}
                    </select>
                </section>
            )
        default:
            return null;
    
    }
}