'use client'

import React, { useEffect, useRef, useState } from 'react'

interface I_PropsInputPIN {
    field: string
    callbackAction: (code: string, field: string) => void
    autoFocus?: boolean
    isNumbericOnly?: boolean
    error?: string
    label?: string
}


export default function InputPIN({ field, callbackAction, autoFocus = false, isNumbericOnly = false, error, label = '' }: I_PropsInputPIN) {
    const [code, setCode] = useState('');

    // !TODO: replace any with event | ref types
    // Refs to control each digit input element
    const inputRefs: React.MutableRefObject<null>[] = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    // Reset all inputs and clear state
    const resetCode = () => {
        inputRefs.forEach(ref => {
            //@ts-ignore
            ref.current.value = '';
        });
        //@ts-ignore
        autoFocus && inputRefs[0].current.focus()
        setCode('');
    }

    // Call our callback when code = 6 chars
    useEffect(() => {
        if (code.length === 6) {
            if (typeof callbackAction === 'function') callbackAction(code, field);
        }
    }, [code]); //eslint-disable-line

    // Listen for external reset toggle
    useEffect(() => {
        resetCode();
    }, []);

    // Handle input
    function handleInput(e: any, index: number) {
        const input = e.target;
        const previousInput = inputRefs[index - 1];
        const nextInput = inputRefs[index + 1];

        // Update code state with single digit
        const newCode = [...code];

        if (isNumbericOnly) {

            if (isNaN(Number(input.value))) {
                input.value = ''
                return
            }
            newCode[index] = input.value
            // @ts-ignore
            inputRefs[index].current.value = input.value
        } else {
            // Convert lowercase letters to uppercase
            if (/^[a-z]+$/.test(input.value)) {
                const uc = input.value.toUpperCase();
                newCode[index] = uc;
                // @ts-ignore
                inputRefs[index].current.value = uc;
            } else {
                newCode[index] = input.value;
            }
        }

        setCode(newCode.join(''));
        input.select();

        if (input.value === '') {
            // If the value is deleted, select previous input, if exists
            if (previousInput) {
                // @ts-ignore
                previousInput.current.focus();
            }
        } else if (nextInput) {
            // Select next input on entry, if exists
            // @ts-ignore
            nextInput.current.select();
        }
    }


    // Select the contents on focus
    function handleFocus(e: any) {
        e.target.select();
    }

    // Handle backspace key
    function handleKeyDown(e: any, index: number) {
        const input = e.target;
        const previousInput = inputRefs[index - 1];

        if ((e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 32) && input.value === '') {
            e.preventDefault();
            setCode((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1));
            if (previousInput) {
                // @ts-ignore
                previousInput.current.focus();
            }
        }
    }

    // Capture pasted characters
    const handlePaste = (e: any) => {
        const pastedCode = e.clipboardData.getData('text');
        if (pastedCode.length === 6) {
            setCode(pastedCode);
            inputRefs.forEach((inputRef, index) => {
                //@ts-ignore
                inputRef.current.value = pastedCode.charAt(index);
            });
        }
    };

    return (
        <div>
            <label htmlFor={field} className='mb-1.5 font-semibold'>{label}</label>
            <section id={field} className="relative flex justify-between gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                        key={index}
                        name={field}
                        ref={inputRefs[index]}
                        className={`border ${error ? "border-red-600 text-red-600" : "border-gray-300"} focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block size-12 rounded-lg bg-white py-3 text-center text-sm font-extrabold text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400`}
                        type={code.length === 6 && !error ? 'password' : 'text'}
                        inputMode={isNumbericOnly ? 'numeric' : 'text'}
                        maxLength={1}
                        autoFocus={index === 0}
                        onFocus={handleFocus}
                        onChange={(e) => handleInput(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        disabled={false}
                        placeholder="⚬"
                    />
                ))}
            </section>
        </div>
    );
}