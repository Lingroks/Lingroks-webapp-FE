'use client'
import React from 'react';
import AuthLayout from '@/app/auth/AuthLayout';
import AuthMainBtn from '@/components/button/AuthMainBtn';

import ForgotPasswordPic from '../ForgotPasswordPic';

const VerifyPassword = () => {
    return(
        <AuthLayout>
            <div className='w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto px-5 pb-5'>
                <div className='flex items-center justify-center mb-2'>
                    <ForgotPasswordPic 
                     pic='/mail-reception.svg'
                     alt='mail'
                    />
                </div>
                <h1 className='text-black text-[2rem] font-inter-medium mb-1'>
                    Enter your code
                </h1>
                <p className='text-secondaryGrey mb-6 text-[1rem]'>
                   We just sent a 4-digit code to your email
                </p>
                <form action='' className='w-full'>
                    <p>
                        Didn't receive the code? <a href='#' className='text-secondaryBlue'>Resend</a>
                    </p>
                    <AuthMainBtn 
                    text='Continue'
                    type="submit" 
                    className='w-full border-none bg-secondaryBlue text-white rounded-[60px] py-2 px-4 mb-2'
                    />
                </form>
            </div>
        </AuthLayout>        
    )
}

export default VerifyPassword;