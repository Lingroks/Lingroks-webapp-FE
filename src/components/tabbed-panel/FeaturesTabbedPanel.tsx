"use client";
import React from 'react';
import Image from 'next/image';
import style from './TabbedPanel.module.scss';
import ReactPlayer from 'react-player';

const FeaturesTabbedPanel: React.FC = () => {

    const FeaturesAssets = [
        {
            index: 0,
            videoSrc: 'https://youtu.be/ZK-rNEhJIDs?si=KiFHUoBPqjpP2Dwe',
            text: 'Text',
            icon: '/text.svg'
        },
        {
            index: 1,
            videoSrc: 'https://youtu.be/mtPqxJBMXCQ?si=mYGuW70MGgcSRv2E',
            text: 'Audio',
            icon: '/audio.svg'
        },
        {
            index: 2,
            videoSrc: 'https://youtu.be/mZlzS9i9i2Y?si=HM2QbBwtgAIlKe8W',
            text: 'Summary',
            icon: '/summary.svg'
        },
        {
            index: 3,
            videoSrc: 'https://youtu.be/HzAHRtJiiGk?si=DUxE68rabSNNUCai',
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
                        className={`${style.sidebar__inner_element} ${currentIndex === index ? style.featured__tab_sidebar_active : ''}`}>
                            <Image 
                            src={FeaturesAssets[index].icon} 
                            alt=""
                            width={16}
                            height={16}
                            className={style.sidebar__inner_icon}
                            />
                            <span className={style.sidebar__inner_text}>
                                {FeaturesAssets[index].text}
                            </span>
                        </div>
                    ))}
                </div>
                <div className='flex-1 w-full h-full'>
                    {/* We'll make a demo video for each of the features and upload on youtube...then we will refrence them here...I only keep these videos here as placeholders */}
                    <ReactPlayer
                        url={FeaturesAssets[currentIndex].videoSrc}
                        controls
                        width='100%'
                        height='100%'
                        autoPlay={false}
                        className='rounded-[12px] p-4'
                    />
                </div>
            </div>
        </div>
    )
}

export default FeaturesTabbedPanel;