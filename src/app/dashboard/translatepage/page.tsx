import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import DashboardHeader from '../../../components/header/dashboard/DasboardHeader';
import style from "../../../assets/scss/pages/translate.module.scss"

const TranslatePage = () => {
  return (
    <>
      <DashboardHeader />
      <div className={style.translate__main__content}>
        <Breadcrumb
          title="Home | Loom"
          date="29 October 2024"
          author="Einstein Namah"
        />
        <div>TranslatePage</div>
      </div>
    </>
  );
};

export default TranslatePage;
