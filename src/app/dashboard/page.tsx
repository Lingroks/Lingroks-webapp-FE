'use client';

// Example: Importing and using in Dashboard.tsx
import React, { useEffect } from 'react';
import DashboardHeader from '../../components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/pages/Dashboard.module.scss';
import TranslateInput from '../../components/translateInput/index';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../,,/../../context/UserContext';
import { ToastContainer } from 'react-toastify';
import AuthHandler from '@/components/authhandler';
// import Loader from "../../components/loader/index"

const Dashboard = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/auth/login');
    }
  }, [router]);

  // const cardData = [
  //   {
  //     headText: 'Lorem ipsum dolor sit amet consectetur.',
  //     bottomText: 'Translate',
  //   },
  //   {
  //     headText: 'Lorem ipsum dolor sit amet consectetur.',
  //     bottomText: 'Translate',
  //   },
  //   {
  //     headText: 'Lorem ipsum dolor sit amet consectetur.',
  //     bottomText: 'Summary',
  //   },
  //   {
  //     headText: 'Lorem ipsum dolor sit amet consectetur.',
  //     bottomText: 'Translate',
  //   },
  //   {
  //     headText: 'Lorem ipsum dolor sit amet consectetur.',
  //     bottomText: 'Insight',
  //   },
  //   {
  //     headText: 'Lorem ipsum dolor sit amet consectetur.',
  //     bottomText: 'Translate',
  //   },
  // ];
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
