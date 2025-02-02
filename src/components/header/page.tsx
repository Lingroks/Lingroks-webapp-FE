'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './dashboard/header.module.scss';
import { motion } from 'framer-motion';
import MobileMenu from '../mobile-menu/index';
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    return(
        <header className={style.main__header}>
            <div className={style.main__header_wrapper}>
                <Link href="/">
                    <Image
                    src="/Lingroks.svg" 
                    alt="Logo"
                    width={105}
                    height={100} 
                    className=''/>
                </Link>
                <nav className='flex-1 justify-start ml-6 max-md:hidden'>
                    <ul className='flex gap-4 items-center justify-start'>
                        <li>
                            <Link href="#features">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="#use-case">
                                Use Cases
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <div className='flex gap-4 items-center justify-center'>
                        <Link href="/auth/login" className='max-md:hidden'>
                            <button type="button" className='bg-[#f4f4f4] text-[#323232] cursor-pointer inline-block m-0 relative text-center w-auto touch-manipulation text-base font-inter-regular rounded-[60px] outline-none py-[8px] px-6 transition-all border-none'>
                            Login
                            </button>
                        </Link>
                        <Link href="/auth/signup" className='max-md:hidden'>
                            <button type="button" className='cursor-pointer inline-block m-0 relative text-center w-auto touch-manipulation text-base font-inter-regular rounded-[60px] outline-none py-[8px] px-6 transition-all border-none bg-mainBlue text-white'>
                            Sign Up
                            </button>
                        </Link>
                        {!isMobileMenuOpen && 
                        <div 
                        onClick={toggleMobileMenu}
                        className={style.hamburger__menu}>
                            <div className={style.line}></div>
                            <div className={style.line}></div>
                            <div className={style.line}></div>
                        </div>}
                        {isMobileMenuOpen &&
                        <div className={style.close__menu}>
                            <IoCloseOutline 
                            onClick={toggleMobileMenu}
                            className='text-2xl cursor-pointer'/>
                        </div>}
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={style.mobile__menu_container}>
                    <MobileMenu 
                    menu={isMobileMenuOpen}
                    onToggle={toggleMobileMenu}
                    />
            </motion.div>
        </header>
    )
}