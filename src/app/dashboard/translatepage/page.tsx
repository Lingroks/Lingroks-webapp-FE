import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/breadcrumb';
import DashboardHeader from '../../../components/header/dashboard/DasboardHeader';

const TranslatePage = () => {
  return (
    <>
      <DashboardHeader />
      <div>
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
