import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Logo from '/Lingroks.svg';

export default function Header() {
    return(
        <header className='w-full'>
            <div className='max-w-[1100px] flex items-center justify-between mx-auto my-0 px-6 py-2 cursor-pointer'>
                <Link href="/">
                    <Image
                    src="/Lingroks.svg" 
                    alt="Logo"
                    width={105}
                    height={100} 
                    className=''/>
                </Link>
                <nav>

                </nav>
                <div>
                    <div className='flex gap-4 items-center justify-center'>
                        <button type="button">
                           Login
                        </button>
                        <Link href="/auth/login">
                            <button type="button" className='cursor-pointer inline-block m-0 relative text-center w-auto touch-manipulation text-base font-inter-regular rounded-lg outline-none py-[14px] px-6 transition-all border-none bg-mainBlue text-white'>
                               Start for free
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}