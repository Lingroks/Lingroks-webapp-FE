"use client";
import React from 'react';
import Image from 'next/image';
import style from './TabbedPanel.module.scss';
import VideoSrc from '../videosrc/VideoSrc';

const FeaturesTabbedPanel: React.FC = () => {

    const FeaturesAssets = [
        {
            index: 0,
            videoSrc: 'https://app.supademo.com/embed/cm6scws7t059x5laqa4q1bx5w?embed_v=2',
            text: 'Text',
            icon: '/text.svg'
        },
        {
            index: 1,
            videoSrc: 'https://app.supademo.com/embed/cm6sczrxe05ba5laqa2rnvm4p?embed_v=2',
            text: 'Audio',
            icon: '/audio.svg'
        },
        {
            index: 2,
            videoSrc: 'https://app.supademo.com/embed/cm6sd5cb405hj5laq9mo9meum?embed_v=2',
            text: 'Summary',
            icon: '/summary.svg'
        },
        {
            index: 3,
            videoSrc: 'https://app.supademo.com/embed/cm6sesr3c069v5laq6tzhi5pl?embed_v=2',
            text: 'Insights',
            icon: '/insight.svg'
        }
    ]

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const displayVideo = (index: number) => {
        setCurrentIndex(index);
        const videoElement = document.getElementById("featureVideo") as HTMLVideoElement;
        if (videoElement) {
            videoElement.src = FeaturesAssets[index].videoSrc; // Update source
            videoElement.load(); // Ensure the new video plays
        }
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
                    <div className='w-full h-full'>
                        {/* <video muted autoPlay loop controls className='w-full h-full' id="featureVideo">
                            <source src={FeaturesAssets[currentIndex].videoSrc} type="video/mp4" />
                        </video> */}
                        <VideoSrc src={FeaturesAssets[currentIndex].videoSrc}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesTabbedPanel;