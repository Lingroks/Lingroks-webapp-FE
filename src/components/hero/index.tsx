import React from 'react';
import styles from './Hero.module.scss';
import TranslateInput from '../translateInput';

interface HeroProps {
    title: string;
}

const Hero: React.FC<HeroProps> = ({title}) => {
    return (
        <div className={styles.hero}>
            <div className='max-w-[750px] m-[auto] flex flex-col items-center justify-center gap-4 px-4'>
                <h1 className={styles.hero__title}>
                {title}
                </h1>
                <div className={styles.hero__input}>
                    <TranslateInput />
                </div>
            </div>
        </div>
    );
}

export default Hero;