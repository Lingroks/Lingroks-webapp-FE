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
                <button className={style.chat__button}>Button 1</button>
                <button className={style.chat__button}>Button 2</button>
              </div>
              <button className={style.chat__button__submit__button}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
