'use client'
import React from 'react';
import { useState } from 'react';
import AuthLayout from '@/app/auth/AuthLayout';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import SetOtpInput from '@/components/input/SetOtpInput';
import ForgotPasswordPic from '../ForgotPasswordPic';

interface OtpChangeEvent {
    target: {
        value: string;
    };
}
const VerifyPassword: React.FC = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);


    const handleOtpChange = (event: OtpChangeEvent) => {
        const newOtp = event.target.value;
        setOtp(newOtp.split(''));
    };

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
                <form action='' className='flex flex-col items-center justify-start w-full'>
                    <SetOtpInput 
                        value={otp}
                        onChange={handleOtpChange}
                    />
                    <p className='text-center mt-6 mb-6 text-[1rem] text-secondaryGrey'>
                        Didn&apos;t receive the code? <a href='#' className='text-secondaryBlue underline'>Click to resend</a>
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