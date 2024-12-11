// Example: Importing and using in Dashboard.tsx
import DashboardHeader from '../../components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/Dashboard.module.scss';

const Dashboard = () => {
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

          {/* <div className={style.input__container}>
            <div className={style.input__container}></div>
          </div> */}

          <div className={style.chat__input__container}>
            {/* Textarea */}
            <textarea
              className={style.chat__textarea}
              placeholder="Type your message..."
            ></textarea>

            {/* Buttons */}
            <div className={style.chat__buttons}>
              <div className={style.left__buttons}>
                {/* Dropdown */}
                <div className="dropdown">
                  <button
                    className="chat-button dropdown-button"
                    onClick={toggleDropdown}
                  >
                    <span className="dropdown-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                        fill="#4A4A4A"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </span>
                    Translate
                  </button>
                  {dropdownOpen && (
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">
                        <span className="dropdown-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                            width="18"
                            fill="#4A4A4A"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3L2 12h3v7h6v-4h2v4h6v-7h3L12 3z" />
                          </svg>
                        </span>
                        Audio
                      </li>
                      <li className="dropdown-item">
                        <span className="dropdown-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                            width="18"
                            fill="#4A4A4A"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </span>
                        Summary
                      </li>
                      <li className="dropdown-item">
                        <span className="dropdown-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="18"
                            viewBox="0 0 24 24"
                            width="18"
                            fill="#4A4A4A"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 7l-5 5h10z" />
                          </svg>
                        </span>
                        Insight
                      </li>
                    </ul>
                  )}
                </div>

                <button className={style.chat__button}>Button 2</button>
              </div>
              <button className={style.chat__button__submit__button}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
