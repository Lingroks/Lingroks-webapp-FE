"use client";
import React from 'react';
import Image from 'next/image';
import style from './TabbedPanel.module.scss';

const FeaturesTabbedPanel: React.FC = () => {

    const FeaturesAssets = [
        {
            index: 0,
            videoSrc: '/video--1.png',
            text: 'Translate Text',
            icon: '/text.svg'
        },
        {
            index: 1,
            videoSrc: '/video-1.png',
            text: 'Audio',
            icon: '/audio.svg'
        },
        {
            index: 2,
            videoSrc: '/video--3.png',
            text: 'Summary',
            icon: '/summary.svg'
        },
        {
            index: 3,
            videoSrc: '/video--4.png',
            text: 'Insights',
            icon: '/insight.svg'
        }
    ]

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const displayVideo = (index: number) => {
        setCurrentIndex(index);
    }
    return (
        <div className='w-full border-[#d8d8d8] border border-solid rounded-2xl h-[420px]'>
            <div className={style.featured__tab_wrapper}>
                <div className={style.featured__tab_sidebar}>
                    {FeaturesAssets.map((_, index) => (
                        <div 
                        onClick={() => displayVideo(index)}
                        key={index}
                        className={style.sidebar__inner_element}>
                            <Image 
                            src={FeaturesAssets[index].icon} 
                            alt=""
                            width={16}
                            height={16}
                            />
                            <span className={style.sidebar__inner_text}>
                                {FeaturesAssets[index].text}
                            </span>
                        </div>
                    ))}
                </div>
                <div className='flex-1 w-full h-full'>
                    <Image
                    src={FeaturesAssets[currentIndex].videoSrc} 
                    width={100}
                    height={100}
                    objectFit="cover"
                    alt=''
                    className='rounded-[12px] w-full h-full p-4'
                    unoptimized={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default FeaturesTabbedPanel;