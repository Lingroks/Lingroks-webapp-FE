import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Logo from '/Lingroks.svg';

export default function Header() {
    return(
        <header className='w-full'>
            <div className='max-w-[1100px] flex items-center justify-start mx-auto my-0 px-6 py-2 cursor-pointer'>
                <Link href="/">
                    <Image
                    src="/Lingroks.svg" 
                    alt="Logo"
                    width={105}
                    height={100} 
                    className=''/>
                </Link>
                <nav className='flex-1 justify-start ml-6'>
                    <ul className='flex gap-4 items-center justify-start'>
                        <li>
                            <Link href="/features">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing">
                                Use Cases
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <div className='flex gap-4 items-center justify-center'>
                    <Link href="/auth/login">
                        <button type="button" className='bg-[#f4f4f4] text-[#323232] cursor-pointer inline-block m-0 relative text-center w-auto touch-manipulation text-base font-inter-regular rounded-[60px] outline-none py-[8px] px-6 transition-all border-none'>
                           Login
                        </button>
                    </Link>
                    <Link href="/auth/signup">
                        <button type="button" className='cursor-pointer inline-block m-0 relative text-center w-auto touch-manipulation text-base font-inter-regular rounded-[60px] outline-none py-[8px] px-6 transition-all border-none bg-mainBlue text-white'>
                            Sign Up
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}