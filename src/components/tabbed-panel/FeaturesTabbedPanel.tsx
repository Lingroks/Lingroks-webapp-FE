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
            videoSrc: 'https://www.loom.com/embed/5d1481bf342f4e0dbfce9badd38481fd?sid=23085b99-046c-4e81-beac-6220e9b23cd9',
            text: 'Text',
            icon: '/text.svg'
        },
        {
            index: 1,
            videoSrc: 'https://www.loom.com/embed/5be62135eaf04cd78aac76cdfec99d7a?sid=1b5a8c98-a4d7-4d35-b77b-895855e0ac9b',
            text: 'Audio',
            icon: '/audio.svg'
        },
        {
            index: 2,
            videoSrc: 'https://www.loom.com/embed/a059c43e769e4b92bd2a302577323ae4?sid=6f8f51fd-bda9-4064-95e4-40f9b40758ea',
            text: 'Summary',
            icon: '/summary.svg'
        },
        {
            index: 3,
            videoSrc: 'https://www.loom.com/embed/a46e9d27849e483db7a83d80354b94f5?sid=34822708-1d66-4c5e-bc2a-bc173f3afbb4',
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
                        <VideoEmbed 
                        src={FeaturesAssets[currentIndex].videoSrc}
                        title='video'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesTabbedPanel;