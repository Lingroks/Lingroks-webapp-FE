import React from 'react';
import ChatBoxInput from '../input/ChatBoxInput';

interface HeroProps {
    title: string;
}

const Hero: React.FC<HeroProps> = ({title}) => {
    return (
        <div className='w-full pt-16'>
            <div className='max-w-[750px] m-[auto] flex flex-col items-center justify-center gap-4 px-4'>
                <h1 className='text-center font-semibold text-4xl text-[#323232]'>
                {title}
                </h1>
                <ChatBoxInput />
            </div>
        </div>
    );
}

export default Hero;