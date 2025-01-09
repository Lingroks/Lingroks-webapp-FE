"use client"

// Example: Importing and using in Dashboard.tsx
import React from 'react';
import DashboardHeader from '../../components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/pages/Dashboard.module.scss';

const Dashboard = () => {
 
  return (
    <div>
      <DashboardHeader />
      <div className={style.dashboard__main__content}>
        
       
      </div>
    </div>
  );
};

export default Dashboard;