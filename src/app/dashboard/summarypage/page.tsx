'use client'

import React,{useEffect,useState} from 'react';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import DashboardHeader from '../../../components/header/dashboard/DasboardHeader';
import style from '../../../assets/scss/pages/translate.module.scss';
import input from '../../../components/translateInput/tsInput.module.scss';
import { useSearchParams, useRouter } from 'next/navigation';

const AudioPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(false); 
  const summary = searchParams.get('summary');


  useEffect(() => {
    // Check if 'track' and 'textInput' are available
    if (!summary) {
      router.push("/dashboard"); 
    } else {
      setIsLoaded(true); 
    }
  }, [summary]);

  return (
    <>
      <DashboardHeader />
      <div className={style.translate__main__content}>
        <Breadcrumb
          title="Home | Loom"
          date="2 days ago"
          author="Einstein Namah"
        />

        <div className={input.chat__input__container}>
          {/* Textarea */}
          <textarea
            className={input.translated}
            placeholder="Enter your text or link here"
            value={summary || ''}  // Set textarea value to the 'textInput'
            readOnly
          />
           

          <div className={input.input__cointainer}>
            <div className={input.input__wrapper}>
              <input type="email" name="" id="" value="johndoe@gmail.com" />
            </div>
            <div>
              <button className={input.input__retrybutton}>retry</button>
            </div>
          </div>

          {/* Bu  ttons */}
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
                  Summary
                </button>
              </div>
            </div>
            <button className={`${input.chat__button} ${input.submit__button}`}>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPage;
