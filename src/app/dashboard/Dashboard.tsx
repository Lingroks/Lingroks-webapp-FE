// Example: Importing and using in Dashboard.tsx
import React, { useState } from 'react';
import DashboardHeader from '../../components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/Dashboard.module.scss';

const Dashboard = () => {
  // Dropdown states for Button 1 and Button 2
  const [selectedOption1, setSelectedOption1] = useState('Translate');
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const [selectedOption2, setSelectedOption2] = useState({
    text: 'ENG',
    icon: <EnglandFlagIcon />,
  });
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const button1Options = [
    { text: 'Translate', icon: <TranslateIcon /> },
    { text: 'Audio', icon: <AudioIcon /> },
    { text: 'Summary', icon: <SummaryIcon /> },
    { text: 'Insight', icon: <InsightIcon /> },
  ];

  const button2Options = [
    { text: 'ENG', icon: <EnglandFlagIcon /> },
    { text: 'ENG', icon: <UsaFlagIcon /> },
  ];

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
      bottomText: 'Translate',
    },
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

          <div className={style.chat__input__container}>
            {/* Textarea */}
            <textarea
              className={style.chat__textarea}
              placeholder="Enter your text or link here"
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

                {/* Dropdown Button 2 */}
                <div className={style.dropdown}>
                  <button
                    className={`${style.chat__button} ${style.dropdown__button}`}
                    onClick={() => setDropdownOpen2(!dropdownOpen2)}
                  >
                    <span className={style.dropdown__icon}>
                      {selectedOption2.icon}
                    </span>
                    {selectedOption2.text}
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
              </div>
              <button
                className={`${style.chat__button} ${style.submit__button}`}
              >
                Proceed
              </button>
            </div>
          </div>

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

// SVG Icons
const TranslateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#4A4A4A">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11 5H9V3H7v2H5v2h2v2h2V7h2V5zm8 8l-4 8H9l4-8H9l4-8h6l-4 8h4z" />
  </svg>
);

const AudioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#4A4A4A">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3v18l-6-6H3V9h3l6-6zm7 10h-2v-2h2v2zm0-4h-2V7h2v2zm0 8h-2v-2h2v2z" />
  </svg>
);

const SummaryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#4A4A4A">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 3h18v2H3V3zm0 4h10v2H3V7zm0 4h18v2H3v-2zm0 4h10v2H3v-2zm0 4h18v2H3v-2z" />
  </svg>
);

const InsightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#4A4A4A">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 1 0-8 8v-2a6 6 0 1 1 6-6h-2a4 4 0 1 0-4 4v6h4v2H8v-2h4v-6a6 6 0 1 1 6-6h2a10 10 0 0 1-10 10V2z" />
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
