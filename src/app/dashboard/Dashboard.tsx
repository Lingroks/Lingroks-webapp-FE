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
              Hi, John
              <span className={style.text__newline}>
                What would you like to do today ?
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
