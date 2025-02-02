'use client';

// Example: Importing and using in Dashboard.tsx
import React from 'react';
import DashboardHeader from '@/components/header/dashboard/DasboardHeader';
import style from '@/assets/scss/pages/Dashboard.module.scss';
import Link from 'next/link';
import { useUser } from '../../../context/UserContext'; // Adjust path if needed

const PersonalInfo = () => {
  const { user } = useUser(); // Access user data
  return (
    <div>
      <DashboardHeader />
      <div className={style.container_wrapper}>
        <div className={style.container}>
          <Link href="/dashboard">
            {' '}
            <a className={style.back_link}>&lt; Back</a>
          </Link>
          <div className={style.container_main_content}>
            <div className={style.header}>Personal Info</div>
            <div className={style.row}>
              <div className={style.input_group}>
                <label className={style.label}>First Name</label>
                <input
                  type="text"
                  className={style.input}
                  value={user?.firstName || ''}
                  readOnly
                />
              </div>
              <div className={style.input_group}>
                <label className={style.label}>Last Name</label>
                <input
                  type="text"
                  className={style.input}
                  value={user?.lastName || ''}
                  readOnly
                />
              </div>
            </div>
            <div className={style.input_group}>
              <label className={style.label}>Email Address</label>
              <input
                type="email"
                className={style.input}
                value={user?.email || ''}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
