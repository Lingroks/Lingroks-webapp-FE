// Example: Importing and using in Dashboard.tsx
import React from 'react';
import DashboardHeader from '../../components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/Dashboard.module.scss';

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

