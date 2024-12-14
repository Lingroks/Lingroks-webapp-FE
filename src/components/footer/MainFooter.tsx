import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa';
import style from './Footer.module.scss';

const MainFooter: React.FC = () => {
    return(
        <footer className={style.footer}>
                <div className={style.footer__wrapper}>
                  <div className={style.footer__top}>
                    <Link href="/">
                      <Image
                      src="/Lingroks.svg" 
                      alt="Logo"
                      width={105}
                      height={100} 
                      className=''/>
                    </Link>
                    <div className={style.footer__ul_container}>
                      <ul className='flex flex-col items-start justify-start'>
                        <span className='text-[#1e1e1e] font-semibold text-lg mb-2'>
                          Links
                        </span>
                        <li className='mb-2'>
                          <Link href='/' className='text-[.945rem] text-[#646464]'>
                              Features
                          </Link>
                        </li>
                        <li className='mb-2'>
                          <Link href='/' className='text-[.945rem] text-[#646464]'>
                              Use cases
                          </Link>
                        </li>
                        <li className='mb-2'>
                          <Link href='/' className='text-[.945rem] text-[#646464]'>
                              Pricing
                          </Link>
                        </li>
                      </ul>
                      <ul className='flex flex-col items-start justify-start'>
                        <span className='text-[#1e1e1e] font-semibold text-lg mb-2'>
                          Company
                        </span>
                        <li className='mb-2'>
                          <Link href='/' className='text-[.945rem] text-[#646464]'>
                              Contact
                          </Link>
                        </li>
                        <li className='mb-2'>
                          <Link href='/' className='text-[.945rem] text-[#646464]'>
                              Privacy
                          </Link>
                        </li>
                        <li className='mb-2'>
                          <Link href='/' className='text-[.945rem] text-[#646464]'>
                              Terms
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={style.footer__bottom}>
                     <p className={style.footer__bottom__left}>
                        © 2025 Lingroks. All rights reserved. Powered by <Link href='/'>NextBuildr</Link>
                     </p>
                     <div className="flex items-center gap-2">
                        <Link href='/' className='text-[#646464]'>
                          <FaDiscord />
                        </Link>
                        <Link href='/' className='text-[#646464]'>
                          <FaTwitter />
                        </Link>
                        <Link href='/' className='text-[#646464]'>
                          <FaTiktok />
                        </Link>
                        <Link href='/' className='text-[#646464]'>
                          <FaFacebook />
                        </Link>
                     </div>
                  </div>
                </div>
        </footer>
    )
}

export default MainFooter;