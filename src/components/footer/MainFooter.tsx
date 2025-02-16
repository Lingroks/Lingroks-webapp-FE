import React from "react";
import Link from "next/link";
import { FaTwitter, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';
import style from './Footer.module.scss';

const MainFooter: React.FC = () => {
    return(
        <footer className={style.footer}>
                <div className={style.footer__wrapper}>
                  <div className={style.footer__bottom}>
                      <p className={style.footer__bottom__left}>
                        © 2025 Lingroks. Powered by <Link href='/'>NextBuildr</Link>
                      </p>
                      <p className={style.footer__bottom__right}>
                          <Link href='/privacy-policy'>Privacy Policy</Link>•<Link href='/terms'>Terms of Service</Link> 
                      </p>
                      <div className={style.social__media__wrapper}>
                        <Link href='https://www.linkedin.com/company/lingroks/' className={style.social__media__icon}>
                          <FaLinkedin />
                        </Link>
                        <Link href='https://x.com/Lingroks' className={style.social__media__icon}>
                          <FaTwitter />
                        </Link>
                        <Link href='https://www.tiktok.com/@lingroks' className={style.social__media__icon}>
                          <FaTiktok />
                        </Link>
                        <Link href='https://www.youtube.com/@Lingroks' className={style.social__media__icon}>
                          <FaYoutube />
                        </Link>
                     </div>
                  </div>
                </div>
        </footer>
    )
}

export default MainFooter;