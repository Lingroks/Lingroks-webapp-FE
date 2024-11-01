'use client';

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import AuthLayout from '../AuthLayout';
import AuthButton from '@/components/button/AuthButton';
import AuthInputBox from '@/components/input/AuthInputBox';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import AuthInstruction from './AuthInstruction';
import { SiMicrosoft } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return(
        <AuthLayout>
            <div className='w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto px-5 pb-5'>
                <h1 className='text-black text-[2rem] font-inter-medium mb-1'>
                    Create a free account 
                </h1>
                <p className='text-textGrey text-[16px] font-inter-regular mb-4 leading-normal'>
                    Start translating your contents
                </p>
                <div className='flex justify-between flex-col items-center w-full gap-3 mb-4 sm:flex-row sm:gap-2'>
                    <AuthButton 
                        icon='/google.svg'
                        text='Continue with Google' 
                        className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-textGrey w-full"/>
                    <AuthButton 
                        icon='/microsoft.svg'
                        text='Continue with Microsoft' 
                        className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-textGrey w-full"/>
                </div>
                <div className='flex items-center justify-between text-base text-textGrey leading-3 font-inter-regular my-4 gap-2 w-full'>
                    <div className='h-[.5px] bg-secondaryGrey w-[45%]'></div>
                    <span className='block text-base text-secondaryGrey font-inter-medium'>Or</span>
                    <div className='h-[.5px] bg-secondaryGrey w-[45%]'></div>
                </div>
                <form className='flex flex-col items-start justify-start w-full'>
                    <div className='flex items-center justify-between w-full gap-3'>
                        <AuthInputBox 
                        label='First Name'
                        type='text'
                        placeholder='Your first name'
                        value={firstName}
                        id='firstName'
                        required={true}
                        forgotPassword={false}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='mb-6 text-secondaryGrey w-[45%]'/>

                        <AuthInputBox 
                        label='Last Name'
                        type='text'
                        placeholder='Your last name'
                        value={lastName}
                        id='lastName'
                        required={true}
                        forgotPassword={false}
                        onChange={(e) => setLastName(e.target.value)}
                        className='mb-6 text-secondaryGrey w-[45%]'
                        />
                    </div>
                    <div className='flex flex-col items-start justify-start w-full'>
                        <AuthInputBox 
                        label='Email Address'
                        type='email'
                        placeholder='Your email address'
                        value={email}
                        id='email'
                        required={true}
                        forgotPassword={false}
                        onChange={(e) => setEmail(e.target.value)}
                        className='mb-6 text-secondaryGrey'
                        />
                        <AuthInputBox 
                        label='Password'
                        type='password'
                        placeholder='Your password'
                        id='password'
                        value={password}
                        required={true}
                        minLength={8}
                        forgotPassword={false}
                        onChange={(e) => setPassword(e.target.value)}
                        className='mb-6' 
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-wrap gap-2 mb-2'>
                            <AuthInstruction 
                            text='At least one uppercase letter'
                            />
                            <AuthInstruction 
                            text='Minimum of 8 characters'
                            />
                            <AuthInstruction 
                            text='At least one number'
                            />
                        </div>
                        <p className='text-secondaryGrey text-[.9rem] mb-3'>
                            By clicking on create account, you are agreeing to our <Link href='/terms' className='text-mainBlue'>Terms of Service</Link> and <Link href='/privacy' className='text-mainBlue'>Privacy Policy</Link>
                        </p>
                    </div>
                    <div className='w-full '>
                       <AuthMainBtn
                        text='Create Account'
                        type="submit" 
                        className='w-full border-none bg-secondaryBlue text-white rounded-[60px] py-2 px-4 mb-2'
                        />
                        <p className='text-center text-black font-inter-regular leading-3'>
                            Already have an account? 
                            <Link href="/auth/login" className='text-mainBlue ml-1'>
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}