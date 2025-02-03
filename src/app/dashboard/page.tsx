'use client';

// Example: Importing and using in Dashboard.tsx
import React, { useEffect } from 'react';
// import type { Metadata } from 'next';
import DashboardHeader from '../../components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/pages/Dashboard.module.scss';
import TranslateInput from '../../components/translateInput/index';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../,,/../../context/UserContext';
import { ToastContainer } from 'react-toastify';
import AuthHandler from '@/components/authhandler';
// import Loader from "../../components/loader/index"

export const metadata = {
  title: "Dashboard ",
  description: "Access your personal dashboard on Your App. Manage your settings, view analytics, and stay updated.",
};

const Dashboard = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <div>
      <AuthHandler/>
      <DashboardHeader />
      <div className={style.dashboard__main__content}>
        <div className={style.content__inner}>
          <div className={style.headtext__wrap}>
            <h3>
              Hi, {user?.firstName || '...'}! <br />
              What would you like to do today ?
            </h3>
          </div>

          <TranslateInput />
        </div>
      </div>
      {/* <Loader/> */}
      <ToastContainer toastClassName="text-sm font-inter-regular" />
    </div>
  );
};

export default Dashboard;


