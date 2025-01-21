'use client'

import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import DashboardHeader from '../../../components/header/dashboard/DasboardHeader';
import style from '../../../assets/scss/pages/translate.module.scss';
import input from '../../../components/translateInput/tsInput.module.scss';
import { useSearchParams, useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { copyToClipboard } from '../../../utils/copyToClipboard';

const TranslatePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const translatedText = searchParams?.get('translatedText');

  const handleCopy = (text: string | null) => {
    if (!text) {
      toast.error('No text to copy!');
      return;
    }

    copyToClipboard(text);
  };

  useEffect(() => {
    // Check if 'track' and 'textInput' are available
    if (!translatedText) {
      router.push('/dashboard');
    } else {
      setIsLoaded(true);
    }
  }, [router, translatedText]);

  return (
    <>
      <DashboardHeader />
      <div className={style.translate__main__content}>
        <Breadcrumb
          title="Home | Loom - 29 October 2024"
          date="4 days ago"
          author="Einstein Namah"
        />

        <div className={input.chat__input__container}>
          {/* Textarea */}
          <textarea
            className={input.translated}
            placeholder="Enter your text or link here"
            value={translatedText || ''}
            readOnly
          />

          {/* Buttons */}
          <div className={input.chat__buttons}>
            <div className={input.left__buttons}>
              {/* Dropdown Button 1 */}
              <div className={input.dropdown}>
                <button
                  className={`${input.chat__button__first} ${input.dropdown__button}`}
                >
                  Original
                </button>
              </div>

              {/* Dropdown Button 2 */}
              <div className={input.dropdown}>
                <button
                  className={`${input.chat__button} ${input.dropdown__button}`}
                >
                  Translated
                </button>
              </div>
            </div>
            <button
              onClick={() => handleCopy(translatedText)}
              className={`${input.chat__button} ${input.submit__button}`}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default TranslatePage;
