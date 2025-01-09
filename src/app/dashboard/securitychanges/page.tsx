'use client';

// Example: Importing and using in Dashboard.tsx
import React from 'react';
import DashboardHeader from '@/components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/pages/Dashboard.module.scss';
import Link from 'next/link';

const SecurityChanges = () => {
  return (
    <div>
      <DashboardHeader />
      <div className={style.container}>
        <Link href="/">
          {' '}
          <a className={style.back_link}>&lt; Back</a>
        </Link>
        <div className={style.container_main_content}>
          <div className={style.header}>Security Changes</div>
          <div className={style.input_group}>
            <label className={style.label}>Old Password</label>
            <input
              type="password"
              className={style.input}
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className={style.input_group}>
            <label className={style.label}>New Password</label>
            <input
              type="password"
              className={style.input}
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className={style.input_group}>
            <label className={style.label}>Confirm New Password</label>
            <input
              type="password"
              className={style.input}
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className={style.button_group}>
            <button className={`${style.button} ${style.save}`}>Save</button>
            <button className={`${style.button} ${style.cancel}`}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityChanges;
