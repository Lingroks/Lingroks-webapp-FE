'use client';

// Example: Importing and using in Dashboard.tsx
import React from 'react';
import DashboardHeader from '@/components/header/dashboard/DasboardHeader';
import style from '../../assets/scss/pages/Dashboard.module.scss';
import Link from 'next/link';

const PersonalInfo = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="container">
      <Link href="/"> <a className="back-link">&lt; Back</a></Link>
      <div className="header">Security Changes</div>
      <div className="input_group">
        <label className="label">Old Password</label>
        <input type="password" className="input" placeholder="johndoe@gmail.com" />
      </div>
      <div className="input_group">
        <label className="label">New Password</label>
        <input type="password" className="input" placeholder="johndoe@gmail.com" />
      </div>
      <div className="input_group">
        <label className="label">Confirm New Password</label>
        <input type="password" className="input" placeholder="johndoe@gmail.com" />
      </div>
      <div className="button-group">
        <button className="button save">Save</button>
        <button className="button cancel">Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default PersonalInfo;