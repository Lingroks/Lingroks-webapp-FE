import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Logo from '/Lingroks.svg';

export default function Header() {
    return(
        <header className='w-full'>
            <div className='max-w-[1100px] flex items-center justify-between mx-auto my-0 px-6 py-[14px] cursor-pointer'>
                <Link href="/">
                    <Image
                    src="/Lingroks.svg" 
                    alt="Logo"
                    width={105}
                    height={100} 
                    className=''/>
                </Link>
            </div>
        </header>
    )
}