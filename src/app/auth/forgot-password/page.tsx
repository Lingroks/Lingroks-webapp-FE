'use client'

import React from 'react';
import { useState } from 'react';
import AuthLayout from '../AuthLayout';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import AuthInput from '@/components/input/AuthInputBox';
import ForgotPasswordPic from './ForgotPasswordPic';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    return(
        <AuthLayout>
            <div className='w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto px-5 pb-5'>
                <div className='flex items-center justify-center mb-2'>
                    <ForgotPasswordPic 
                     pic='/padlock.svg'
                     alt='padlock'
                    />
                </div>
                <h1 className='text-black text-[2rem] font-inter-medium mb-1'>Forgot Password?</h1>
                <p className='text-secondaryGrey mb-6 text-[1rem]'>
                Enter your email for instructions
                </p>
                <form action='' className='w-full'>
                <AuthInput 
                    label='Email Address'
                    type='email'
                    placeholder='Your email address'
                    id='email'
                    value={email}
                    required={true}
                    className='mb-4'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <AuthMainBtn 
                    text='Send 4-digit code'
                    className='w-full border-none bg-secondaryBlue text-white rounded-[60px] py-2 px-4 mb-2'
                />
                </form>
            </div>
        </AuthLayout>
    )
}

export default ForgotPassword;