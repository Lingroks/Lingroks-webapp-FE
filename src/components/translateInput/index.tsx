// Example: Importing and using in Dashboard.tsx
'use client';
import React, { useState } from 'react';
import style from './tsInput.module.scss';
import Image from 'next/image';
import { toast } from 'react-toastify';
import translateService from '../../services/translateService';
import { generateTextSummary } from '../../services/textSummary';
import { useRouter } from 'next/navigation';
import { isValidUrl } from '../../utils/urlChecker';
import 'react-toastify/dist/ReactToastify.css';

const TranslateInput = () => {
  // Dropdown states for Button 1 and Button 2
  const [selectedOption1, setSelectedOption1] = useState('Translate');
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [selectedOption2, setSelectedOption2] = useState({
    text: 'ENGLISH',
  });
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const button1Options = [
    { text: 'Translate', icon: <TranslateIcon /> },
    { text: 'Audio', icon: <AudioIcon /> },
    { text: 'Summary', icon: <SummaryIcon /> },
    { text: 'Insight', icon: <InsightIcon /> },
  ];

  const button2Options = [
    // { text: 'Arabic', icon: <ArabicFlagIcon /> },
    // { text: 'English', icon: <UsaFlagIcon /> },
    // { text: 'French', icon: <FranceFlagIcon /> },
    // { text: 'Mandarin', icon: <MandarinFlagIcon /> },
    // { text: 'Spanish', icon: <SpainFlagIcon /> },
    { text: 'Arabic' },
    { text: 'English' },
    { text: 'French' },
    { text: 'Mandarin' },
    { text: 'Spanish' },
  ];

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);

      if (selectedOption1 === 'Audio') {
        // Generate speech and get the file URL
        const result = await translateService.generateSpeech(textInput);

        if (!result) {
          toast.error('Audio generation failed');
        }
        toast.success('Text-to-speech conversion successful!');
        setTextInput('');
        // Navigate with the generated audio file URL
        router.push(
          `/dashboard/audiopage?track=${encodeURIComponent(result)}&textInput=${encodeURIComponent(textInput)}`
        );
      } else if (selectedOption1 === 'Translate') {
        if (isValidUrl(textInput)) {
          // Handle URL translation
          const translatedContent =
            await translateService.translateUrlPageContent(
              textInput,
              selectedOption2.text
            );
          toast.success('Web page translation successful!');
          router.push(
            `/dashboard/translatepage?translatedText=${encodeURIComponent(translatedContent)}`
          );
        } else {
          // Perform text-to-text translation if Translate is selected
          const translatedText = await translateService.generateTranslatedText(
            textInput,
            selectedOption2.text
          ); // Pass selected language here
          console.log(translatedText);
          toast.success('Translation successful!');
          setTextInput('');
          router.push(
            `/dashboard/translatepage?translatedText=${encodeURIComponent(translatedText)}`
          );
          // Handle the translated text here
        }
      } else if (selectedOption1 === 'Summary') {
        // Call the generateTextSummary function
        const summary = await generateTextSummary(textInput);

        if (!summary) {
          toast.error('Text summarization failed');
          return;
        }
        toast.success('Text summary generated successfully!');
        setTextInput('');
        router.push(
          `/dashboard/summarypage?summary=${encodeURIComponent(summary)}`
        );
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className={style.chat__input__container}>
        {/* Textarea */}
        <textarea
          className={style.chat__textarea}
          placeholder="Enter your text or link here"
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>

        {/* Buttons */}
        <div className={style.chat__buttons}>
          <div className={style.left__buttons}>
            {/* Dropdown Button 1 */}
            <div className={style.dropdown}>
              <button
                className={`${style.chat__button} ${style.dropdown__button}`}
                onClick={() => setDropdownOpen1(!dropdownOpen1)}
              >
                <span className={style.dropdown__icon}>
                  {
                    button1Options.find(
                      (option) => option.text === selectedOption1
                    )?.icon
                  }
                </span>
                {selectedOption1}
                <div>
                  <Image src="/down.svg" alt="down" width={10} height={10} />
                </div>
              </button>
              {dropdownOpen1 && (
                <ul className={style.dropdown__menu}>
                  {button1Options.map((option) => (
                    <li
                      key={option.text}
                      className={style.dropdown__item}
                      onClick={() => {
                        setSelectedOption1(option.text);
                        setDropdownOpen1(false);
                      }}
                    >
                      <span className={style.dropdown__icon}>
                        {option.icon}
                      </span>
                      {option.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Dropdown Button 2 (Only displayed when 'Translate' is selected) */}
            {selectedOption1 === 'Translate' && (
              <div className={style.dropdown}>
                <button
                  className={`${style.chat__button} ${style.dropdown__button}`}
                  onClick={() => setDropdownOpen2(!dropdownOpen2)}
                >
                  {/* <span className={style.dropdown__icon}>
                    {selectedOption2.icon}
                  </span> */}
                  {selectedOption2.text}
                  <div>
                    <Image src="/down.svg" alt="down" width={10} height={10} />
                  </div>
                </button>
                {dropdownOpen2 && (
                  <ul className={style.dropdown__menu}>
                    {button2Options.map((option) => (
                      <li
                        key={option.text}
                        className={style.dropdown__item}
                        onClick={() => {
                          setSelectedOption2(option);
                          setDropdownOpen2(false);
                        }}
                      >
                        <span className={style.dropdown__icon}>
                          {option.icon}
                        </span>
                        {option.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <button
            className={`${style.chat__button} ${style.submit__button}`}
            onClick={handleButtonClick} // Trigger action on button click
            disabled={isLoading || !textInput}
          >
            {isLoading ? 'Processing...' : 'Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslateInput;

const AudioIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 9.75C9.46719 9.75 10.6562 8.575 10.6562 7.125V3.625C10.6562 2.175 9.46719 1 8 1C6.53281 1 5.34375 2.175 5.34375 3.625V7.125C5.34375 8.575 6.53281 9.75 8 9.75ZM13.1562 7.09375C13.1562 7.025 13.1 6.96875 13.0312 6.96875H12.0938C12.025 6.96875 11.9688 7.025 11.9688 7.09375C11.9688 9.28594 10.1922 11.0625 8 11.0625C5.80781 11.0625 4.03125 9.28594 4.03125 7.09375C4.03125 7.025 3.975 6.96875 3.90625 6.96875H2.96875C2.9 6.96875 2.84375 7.025 2.84375 7.09375C2.84375 9.72969 4.82188 11.9047 7.375 12.2125V13.8125H5.10469C4.89063 13.8125 4.71875 14.0359 4.71875 14.3125V14.875C4.71875 14.9438 4.7625 15 4.81563 15H11.1844C11.2375 15 11.2812 14.9438 11.2812 14.875V14.3125C11.2812 14.0359 11.1094 13.8125 10.8953 13.8125H8.5625V12.2203C11.1453 11.9391 13.1562 9.75156 13.1562 7.09375Z"
      fill="#323232"
    />
  </svg>
);

const SummaryIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0001 14.6668C12.3537 14.6668 12.6928 14.5264 12.9429 14.2763C13.1929 14.0263 13.3334 13.6871 13.3334 13.3335V5.3335L9.33341 1.3335H4.00008C3.64646 1.3335 3.30732 1.47397 3.05727 1.72402C2.80722 1.97407 2.66675 2.31321 2.66675 2.66683V13.3335C2.66675 13.6871 2.80722 14.0263 3.05727 14.2763C3.30732 14.5264 3.64646 14.6668 4.00008 14.6668H12.0001ZM8.66675 2.66683L12.0001 6.00016H8.66675V2.66683ZM4.66675 5.3335H6.66675V6.66683H4.66675V5.3335ZM4.66675 8.00016H11.3334V9.3335H4.66675V8.00016ZM4.66675 10.6668H11.3334V12.0002H4.66675V10.6668Z"
      fill="#323232"
    />
  </svg>
);

const InsightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_715_155)">
      <path
        d="M7.56893 0V2.53897H8.43132V0H7.56885H7.56893ZM4.04746 0.763L3.3409 1.25771L4.79694 3.33699L5.50312 2.84227L4.04746 0.763ZM11.9526 0.763L10.497 2.84228L11.2033 3.337L12.6593 1.25771L11.9527 0.763H11.9526ZM7.99994 3.23365C5.89025 3.23365 4.18004 4.51476 4.18004 6.09532L6.35033 12.668H9.64993L11.82 6.09532C11.82 4.51479 10.1099 3.23365 8.00014 3.23365H7.99994ZM1.13962 3.99564L0.844971 4.80649L3.22962 5.67468L3.52537 4.86421L1.13957 3.99564H1.13962ZM14.8604 3.99564L12.4746 4.86428L12.7694 5.67484L15.1552 4.80651L14.8604 3.99564ZM3.41017 7.70241L0.958171 8.36009L1.18065 9.19251L3.63265 8.53577L3.41021 7.70241H3.41017ZM12.5899 7.70241L12.3676 8.53576L14.8196 9.19239L15.0419 8.35996L12.5899 7.70239V7.70241ZM6.30222 13.1471V14.2896H9.69805V13.1473H6.30224L6.30222 13.1471ZM6.30222 14.8575V16H9.69805V14.8577H6.30224L6.30222 14.8575Z"
        fill="#323232"
      />
    </g>
    <defs>
      <clipPath id="clip0_715_155">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const EnglandFlagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="#fff" />
    <path d="M0 10h24v4H0z" fill="#D7141A" />
    <path d="M10 0h4v24h-4z" fill="#D7141A" />
  </svg>
);

const UsaFlagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="#fff" />
    <path d="M0 3h24v3H0zm0 6h24v3H0zm0 6h24v3H0zm0 6h24v3H0z" fill="#B22234" />
    <rect width="10" height="12" fill="#3C3B6E" />
    <circle cx="2" cy="2" r="1" fill="#fff" />
    <circle cx="4" cy="2" r="1" fill="#fff" />
    <circle cx="2" cy="4" r="1" fill="#fff" />
    <circle cx="4" cy="4" r="1" fill="#fff" />
  </svg>
);
