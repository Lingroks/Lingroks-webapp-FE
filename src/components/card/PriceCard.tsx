import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import style from './Card.module.scss'
import Link from 'next/link';

interface PriceCardProps {
    title: string,
    priceType: string,
    priceTag: boolean,
    price: string,
    variant: string
    priceTagText?: string
}

const PriceCard: React.FC<PriceCardProps> = ({title, priceType, priceTag=false,price, priceTagText, variant}) => {

    const FeatureList = {
        basic: [
            'Basic text and text-to-speech translation (up to 1, 000 characters)',
            'Access to 5 translations per day',
            'Basic webpage translation for browser extension (5 web pages per day)',
            'Text-to-speech with two voices options',
            'Basic text insights',
            'Limited access to the text summary API (up to 1 summary per day)',
            'No social media integration'
        ],
        pro: [
            'Unlimited text and text-to-speech translation (up to 50 languages)',
            'Unlimited webpage translation for browser extension',
            'Text-to-speech with multiple voices',
            'PDF translation',
            'Advanced text insights',
            'Limited access to the text summary API (up to 10 summaries per day)',
            'Social media integration'
        ],
        basicLimit: [
           'Up to 5 translations requests per day',
           'Up to 3 text-to-speech requests per day',
           'One summary per day',
        ],
        proLimit: [
          'Up to 50 languages for text translation',
          'Up to 10 summaries per day',
          'Up to 20 key phrases per summary',

        ],
        basicLanguages: [
          'Five languages (English, Spanish, French, Mandarin, Arabic)',
        ],
        proLanguages: [
          'Everything in Basic plus 45 more languages',
        ]
    }
    const selectedFeatures = variant === 'basic' ? FeatureList.basic : FeatureList.pro;
    const selectedLimit = variant === 'basic' ? FeatureList.basicLimit : FeatureList.proLimit;
    const selectedLanguages = variant === 'basic' ? FeatureList.basicLanguages : FeatureList.proLanguages;
    return(
        <div className={`${style.price__card} w-[45%] rounded-3xl ${variant === 'basic' ? "bg-[#fff] shadow-[0_2px_4px_rgb(0,0,0,0.2)]" : "bg-[#5732E9]"}`}>
            <div className='p-8'>
                 <div className="flex items-start justify-between w-full">
                    <div className="topPart-con">
                      <p className={`text-[#323232 ${variant === 'basic' ? "text-[#000]" : "text-[#f4f4f4]"} text-[14px]]`}>{title}</p>
                      <p className='text-[1.1rem] font-extrabold text-black'>{priceType}</p>
                    </div>
                    {priceTag !== false && (
                    <div className="tag">
                      <p className='bg-[#ffffff66] text-[#f4f4f4] p-2 rounded-lg'>{priceTagText}</p>
                    </div>
                    )}
                 </div>
                 <div className="price">
                    <p className={`text-[2.5rem] font-bold ${variant === 'basic' ? "text-[#000]" : "text-white"}`}>
                      {price}
                    </p>
                 </div>
                 <div className="features">
                    <p className={`text-[1.1rem] ${variant === 'basic' ? "text-[#000]" : "text-[#f4f4f4]"} font-semibold`}>
                      Features
                    </p>
                    <ul>
                      {selectedFeatures.map((feature, index) => (
                        <li 
                        className='flex items-center text-[#323232] text-[14px] font-normal w-full py-2 justify-start'
                        key={index}>
                            <IoCheckmark className={`rounded-[100%] text-[20px] flex items-center justify-center ${variant === 'basic' ? "text-[#f4f4f4] bg-[#5732E9]" : "text-[#4a3aff] bg-[#fff]"}`} />
                            <span className={`ml-[8px] ${variant === 'basic' ? "text-[#000]" : "text-[#f4f4f4]"} flex-1 text-[1rem]`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="features">
                    <p className={`text-[1.1rem] ${variant === 'basic' ? "text-[#000]" : "text-[#f4f4f4]"} font-semibold`}>
                      Daily Limit
                    </p>
                    <ul>
                      {selectedLimit.map((feature, index) => (
                        <li 
                        className='flex items-center text-[#323232] text-[14px] font-normal w-full py-2 justify-start'
                        key={index}>
                            <IoCheckmark className={`rounded-[100%] text-[20px] flex items-center justify-center ${variant === 'basic' ? "text-[#f4f4f4] bg-[#5732E9]" : "text-[#4a3aff] bg-[#fff]"}`} />
                            <span className={`ml-[8px] ${variant === 'basic' ? "text-[#000]" : "text-[#f4f4f4]"} flex-1 text-[1rem]`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="features">
                    <p className={`text-[1.1rem] ${variant === 'basic' ? "text-[#000]" : "text-[#f4f4f4]"} font-semibold`}>
                      Supported Languages
                    </p>
                    <ul>
                      {selectedLanguages.map((feature, index) => (
                        <li 
                        className='flex items-center text-[#323232] text-[14px] font-normal w-full py-2 justify-start'
                        key={index}>
                            <IoCheckmark className={`rounded-[100%] text-[20px] flex items-center justify-center ${variant === 'basic' ? "text-[#f4f4f4] bg-[#5732E9]" : "text-[#4a3aff] bg-[#fff]"}`} />
                            <span className={`ml-[8px] ${variant === 'basic' ? "text-[#000]" : "text-[#f4f4f4]"} flex-1 text-[1rem]`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="button-wrapper mt-2">
                    <Link href='/auth/signup'>
                    <button className={`${variant === 'basic' ? "bg-[#5732e9] text-white" : "bg-[#1e1e1e] text-white"} p-2 rounded-lg w-full`}>
                      Get Started
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
    )
}

export default PriceCard