import React from 'react';
import styles from './Hero.module.scss';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <div className='max-w-[1150px] m-[auto] flex flex-col items-center justify-center gap-4 px-4'>
                <h1 className={styles.hero__title}>
                Smarter <span>Translations</span>, Seamless Results
                </h1>
                <p className={styles.hero__subtitle}>
                    Your AI-powered companion for all your content needs, built with Azure AI services.
                </p>
                <div className={styles.hero__btn}>
                    <Link href="/auth/signup">
                        Get Started For Free
                    </Link>
                </div>
                <div className={styles.hero__svg}>
                    <video src="/2025-02-05-Translate_text_to_any_language_easily.mp4" autoPlay muted playsInline loop preload='auto'/>
                </div>
            </div>
        </div>
    );
}

export default Hero;