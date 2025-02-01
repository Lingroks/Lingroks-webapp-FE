'use client';

import React, { Suspense, useEffect } from 'react';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import DashboardHeader from '../../../components/header/dashboard/DasboardHeader';
import style from '../../../assets/scss/pages/translate.module.scss';
import input from '../../../components/translateInput/tsInput.module.scss';
import { useSearchParams, useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { copyToClipboard } from '../../../utils/copyToClipboard';
import Loader from '@/components/loader/index';

// const InsightContent = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   // const insightData = searchParams?.get('insights');
//   const insightParam = searchParams?.get('insights');

//   let insights = null;
//   try {
//     insights = insightParam
//       ? JSON.parse(decodeURIComponent(insightParam))
//       : null;
//   } catch (error) {
//     console.error('Error parsing insights:', error);
//   }

//   useEffect(() => {
//     if (!insights) {
//       router.push('/dashboard');
//     }
//     console.log('Parsed insights:', insights.insights[0].text);
//   }, [router, insights]);

//   console.log('Parsed insights:', insights);

//   const handleCopy = (text) => {
//     if (!text) {
//       toast.error('No text to copy!');
//       return;
//     }
//     copyToClipboard(text);
//   };

//   return (
//     <>
//       <DashboardHeader />
//       <div className={style.translate__main__content}>
//         <Breadcrumb
//           title="Home | Loom"
//           date="2 days ago"
//           author="Einstein Namah"
//         />
//         <div className={input.chat__input__container}>
//           <textarea
//             className={input.translated}
//             placeholder="Generated Insight"
//             value={insights?.text || ''}
//             readOnly
//           />

//           <div className={input.input__cointainer}>
//             <div className={input.input__wrapper}>
//               <input type="email" value="johndoe@gmail.com" readOnly />
//             </div>
//             <div>
//               <button className={input.input__retrybutton}>retry</button>
//             </div>
//           </div>

//           {insights && (
//             <div className={input.insight__details}>
//               <p>
//                 <strong>Overall Sentiment:</strong> {insights.overallSentiment}
//               </p>
//               <p>
//                 <strong>Confidence Scores:</strong>
//               </p>
//               <ul>
//                 <li>Positive: {insights.confidenceScores.positive}</li>
//                 <li>Neutral: {insights.confidenceScores.neutral}</li>
//                 <li>Negative: {insights.confidenceScores.negative}</li>
//               </ul>
//               <p>
//                 <strong>Length:</strong> {insights.length} characters
//               </p>
//             </div>
//           )}

//           <div className={input.chat__buttons}>
//             <div className={input.left__buttons}>
//               <button
//                 className={`${input.chat__button__first} ${input.dropdown__button}`}
//               >
//                 Original
//               </button>
//               <button
//                 className={`${input.chat__button} ${input.dropdown__button}`}
//               >
//                 Insight
//               </button>
//             </div>
//             <button
//               onClick={() => handleCopy(insights?.text)}
//               className={`${input.chat__button} ${input.submit__button}`}
//             >
//               Copy
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

const InsightContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const insightParam = searchParams?.get('insights');

  let insights = null;
  try {
    insights = insightParam
      ? JSON.parse(decodeURIComponent(insightParam))
      : null;
  } catch (error) {
    console.error('Error parsing insights:', error);
  }

  useEffect(() => {
    if (!insights || !insights.insights?.length) {
      router.push('/dashboard');
    }
    console.log('Parsed insights:', insights);
  }, [router, insights]);

  const handleCopy = (text) => {
    if (!text) {
      toast.error('No text to copy!');
      return;
    }
    copyToClipboard(text);
  };

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
          {insights?.insights?.map((insight, index) => (
            <div key={index} className={input.insight__wrapper}>
              <textarea
                className={input.translated}
                placeholder="Generated Insight"
                value={insight.text || ''}
                readOnly
              />

              {insight && (
                <div className={input.insight__details}>
                  <p>
                    <strong>Overall Sentiment:</strong> {insight.overallSentiment}
                  </p>
                  <p>
                    <strong>Confidence Scores:</strong>
                  </p>
                  <ul>
                    <li>Positive: {insight.confidenceScores.positive}</li>
                    <li>Neutral: {insight.confidenceScores.neutral}</li>
                    <li>Negative: {insight.confidenceScores.negative}</li>
                  </ul>
                  <p>
                    <strong>Length:</strong> {insight.length} characters
                  </p>
                </div>
              )}

              <div className={input.chat__buttons}>
                <div className={input.left__buttons}>
                  <button
                    className={`${input.chat__button__first} ${input.dropdown__button}`}
                  >
                    Original
                  </button>
                  <button
                    className={`${input.chat__button} ${input.dropdown__button}`}
                  >
                    Insight
                  </button>
                </div>
                <button
                  onClick={() => handleCopy(insight.text)}
                  className={`${input.chat__button} ${input.submit__button}`}
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};


const InsightPage = () => (
  <Suspense fallback={<Loader />}>
    <InsightContent />
  </Suspense>
);

export default InsightPage;
