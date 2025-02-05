"use client";
import React from 'react';
import Image from 'next/image';
import style from './TabbedPanel.module.scss';
// import ReactPlayer from 'react-player';
import VideoEmbed from '@/components/demovideo/page';

const FeaturesTabbedPanel: React.FC = () => {

    const FeaturesAssets = [
        {
            index: 0,
            videoSrc: '/2025-02-05-Translate_text_to_any_language_easily.mp4',
            text: 'Text',
            icon: '/text.svg'
        },
        {
            index: 1,
            videoSrc: '/2025-02-05-Lingroks_Demo_Audio.mp4',
            text: 'Audio',
            icon: '/audio.svg'
        },
        {
            index: 2,
            videoSrc: '/2025-02-05-Summarize_content_easily.mp4',
            text: 'Summary',
            icon: '/summary.svg'
        },
        {
            index: 3,
            videoSrc: '/public/2025-02-05-Lingroks_Insight.mp4',
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
                    <div className='w-full h-full'>
                        <video muted autoPlay loop className='w-full h-full'>
                            <source src={FeaturesAssets[currentIndex].videoSrc} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesTabbedPanel;