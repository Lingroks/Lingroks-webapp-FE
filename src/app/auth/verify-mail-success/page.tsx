'use client'


import React from 'react';
// import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation';

import AuthLayout from '@/app/auth/AuthLayout';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import ForgotPasswordPic from '../../auth/forgot-password/ForgotPasswordPic';

const SuccessPage: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/auth/login');
  };

  return (
    <AuthLayout>
      <div className="w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto mt-20 px-5 pb-5">
        {/* <div className="flex items-center justify-center mb-4">
          <img src="/success-icon.svg" alt="success" className="w-20 h-20" />
        </div> */}
        <ForgotPasswordPic 
                     pic='/correct-success.svg'
                     alt='reset successful'
                    />
        <h1 className="text-black text-[2rem] font-inter-medium mb-2">
          Success!
        </h1>
        <p className="text-secondaryGrey mb-6 text-[1rem] text-center">
          Your account has been successfully verified. You can now log in to
          access your account.
        </p>
        <AuthMainBtn
          text="Go to Login"
          className="w-full border-none bg-secondaryBlue text-white rounded-[60px] py-2 px-4"
          onClick={handleRedirect}
        />
      </div>
    </AuthLayout>
  );
};

export default SuccessPage;
