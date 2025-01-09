'use client';

// Example: Importing and using in Dashboard.tsx
import React from 'react';
import DashboardHeader from '@/components/header/dashboard/DasboardHeader';
import style from '@/assets/scss/pages/Dashboard.module.scss';
import Link from 'next/link';

const PersonalInfo = () => {
  return (
    <div>
      <DashboardHeader />

      <div className={style.container}>
        <Link href="/">
          {' '}
          <a className={style.back_link}>&lt; Back</a>
        </Link>
        <div className={style.header}>Personal Info</div>
        <div className={style.row}>
          <div className={style.input_group}>
            <label className={style.label}>First Name</label>
            <input type="text" className={style.input} placeholder="John" />
          </div>
          <div className={style.input_group}>
            <label className={style.label}>Last Name</label>
            <input type="text" className={style.input} placeholder="Doe" />
          </div>
        </div>
        <div className={style.input_group}>
          <label className={style.label}>Email Address</label>
          <input
            type="email"
            className={style.input}
            placeholder="johndoe@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
