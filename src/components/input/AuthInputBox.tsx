'use client'

import React from 'react';
import Link from 'next/link';

interface AuthInputBoxProps {
    label: string,
    type: string,
    placeholder: string,
    value: string,
    id: string,
    required: boolean,
    forgotPassword: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className: string,
}

 const AuthInputBox: React.FC<AuthInputBoxProps> = ({label, type, placeholder, value, id, required, forgotPassword=false, onChange, className}) => {
    return (
        <>
            <div className={`${className} w-full flex items-start justify-start flex-col`}>
                <div className='flex items-start justify-between w-full'>
                    <label htmlFor={id} className='text-sm text-black leading-3 font-inter-regular mb-3'>{label}</label>
                    {forgotPassword && (
                        <Link href='/auth/forgot-password' className='text-secondaryBlue text-sm leading-3 font-inter-regular'>
                            Forgot Password?
                        </Link>
                    )}
                </div>
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    id={id}
                    required={required}
                    onChange={onChange}
                    className={'w-full bg-inputGrey border-gray-300 focus:border-gray-500 focus:outline-none focus:bg-inputGrey  px-[24px] rounded-[60px] py-[8px] shadow-none'} />
            </div>
        </>
    )
}

export default AuthInputBox