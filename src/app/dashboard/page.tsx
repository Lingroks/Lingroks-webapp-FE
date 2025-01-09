"use client"

// Example: Importing and using in Dashboard.tsx
import React from 'react';
import DashboardHeader from '../../components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/pages/Dashboard.module.scss';
import TranslateInput from '../../components/translateInput/index';

const Dashboard = () => {
  const cardData = [
    {
      headText: 'Lorem ipsum dolor sit amet consectetur.',
      bottomText: 'Translate',
    },
    {
      headText: 'Lorem ipsum dolor sit amet consectetur.',
      bottomText: 'Translate',
    },
    {
      headText: 'Lorem ipsum dolor sit amet consectetur.',
      bottomText: 'Summary',
    },
    {
      headText: 'Lorem ipsum dolor sit amet consectetur.',
      bottomText: 'Translate',
    },
    {
      headText: 'Lorem ipsum dolor sit amet consectetur.',
      bottomText: 'Insight',
    },
    {
      headText: 'Lorem ipsum dolor sit amet consectetur.',
      bottomText: 'Translate',
    },
  ];
  return (
    <div>
      <DashboardHeader />
      <div className={style.dashboard__main__content}>
        <div className={style.content__inner}>
          <div className={style.headtext__wrap}>
            <h3>
              Hi, John <br />
              What would you like to do today ?
            </h3>
          </div>

          <TranslateInput />

          {/* your history */}

          <div className={style.history__container}>
            <div className={style.head__text}>Your history</div>
            <div className={style.cards__container}>
              {cardData.map((card, index) => (
                <div key={index} className={style.card}>
                  <h3 className={style.card__head}>{card.headText}</h3>
                  <p className={style.card__bottom}>{card.bottomText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
