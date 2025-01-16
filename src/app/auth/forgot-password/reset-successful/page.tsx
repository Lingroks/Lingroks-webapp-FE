'use client'

import React from 'react';

import AuthLayout from '@/app/auth/AuthLayout';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import ForgotPasswordPic from '../ForgotPasswordPic';
import { useRouter } from 'next/navigation';

const ResetSuccessful: React.FC = () => {
  const router = useRouter();
  return (
    <AuthLayout>
      <div className="w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto px-5 pb-5">
        <div className="flex items-center justify-center mb-2">
          <ForgotPasswordPic
            pic="/correct-success.svg"
            alt="reset successful"
          />
        </div>
        <h1 className="text-black text-[2rem] font-inter-medium mb-1">
          All done!
        </h1>
        <p className="text-secondaryGrey mb-6 text-[1rem]">
          Your password has been reset successfully.
        </p>
        <AuthMainBtn
          text="Login into your account"
          className="w-full border-none bg-secondaryBlue text-white rounded-[60px] py-2 px-4 mb-2"
          onClick={() => router.push('/auth/login')}
        />
      </div>
    </AuthLayout>
  );
};

export default ResetSuccessful;
