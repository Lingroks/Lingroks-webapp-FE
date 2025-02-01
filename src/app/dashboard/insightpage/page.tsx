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

interface Insight {
  id: string;
  text: string;
  length: number;
  overallSentiment: string;
  confidenceScores: {
    positive: number;
    neutral: number;
    negative: number;
  };
}

interface InsightsData {
  insights: Insight[];
}

const InsightContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const insightParam = searchParams?.get('insights');

  let insights: InsightsData | null = null;
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
          {insights?.insights?.map((insight: Insight, index: number) => (
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
                    <strong>Overall Sentiment:</strong>{' '}
                    {insight.overallSentiment}
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
