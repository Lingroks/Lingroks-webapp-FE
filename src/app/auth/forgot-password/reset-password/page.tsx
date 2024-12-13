'use client'
import AuthInputBox from '@/components/input/AuthInputBox';
import React from 'react';
import AuthLayout from '@/app/auth/AuthLayout';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import ForgotPasswordPic from '../ForgotPasswordPic';

const ResetPassword: React.FC = () => {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    return(
        <AuthLayout>
            <div className='w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto px-5 pb-5'>
                <div className='flex items-center justify-center mb-2'>
                    <ForgotPasswordPic 
                     pic='/password.svg'
                     alt='password icon'
                    />
                </div>
                <h1 className='text-black text-[2rem] font-inter-medium mb-1'>
                    Set a new password
                </h1>
                <p className='text-textGrey text-[16px] font-inter-regular mb-4 leading-normal'>
                    Must be at least 8 characters long
                </p>
                <form action="" className='flex flex-col items-start justify-start w-full'>
                   <AuthInputBox 
                      label='Password'
                      type='password'
                      placeholder='Your Password'
                      value={password}
                      id='password'
                      required={true}
                      forgotPassword={false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }}
                      className='mb-6 text-secondaryGrey'
                    />
                   <AuthInputBox 
                        label='Confirm Password'
                        type='password'
                        placeholder='Confirm your password'
                        id='password'
                        value={confirmPassword}
                        required={true}
                        forgotPassword={false}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='mb-6' 
                    />
                    <div className='w-full '>
                       <AuthMainBtn
                        text='Set new password'
                        type="submit" 
                        className='w-full border-none bg-secondaryBlue text-white rounded-[60px] py-2 px-4 mb-2'
                        />
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}

export default ResetPassword;