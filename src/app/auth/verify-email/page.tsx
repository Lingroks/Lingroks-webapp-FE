// SignupOtpVerification.tsx
'use client';

import React, { useState } from 'react';
import AuthLayout from '@/app/auth/AuthLayout';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import SetOtpInput from '@/components/input/SetOtpInput';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const BASE_URL = "http://localhost:8000/v1";

const VerifyEmail: React.FC = () => {
  const router = useRouter();
  const { email } = router.query; // Retrieve email from navigation state
  const [otp, setOtp] = useState('');

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/users/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to verify OTP.');
        return; // Prevent navigation
      }

      toast.success('Email verified successfully!');
      navigate('/auth/success');
    } catch (error) {
      toast.error(error.message || 'An unexpected error occurred!');
    }
  };

  return (
    <AuthLayout>
      <div className="w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto px-5 pb-5">
        <h1 className="text-black text-[2rem] font-inter-medium mb-2">
          Verify Email
        </h1>
        <p className="text-secondaryGrey mb-6 text-[1rem] text-center">
          Please enter the OTP sent to <strong>{email}</strong>.
        </p>
        <SetOtpInput value={otp} onChange={handleOtpChange} />
        <AuthMainBtn
          text="Verify"
          className="w-full border-none bg-secondaryBlue text-white rounded-[60px] py-2 px-4 mt-4"
          onClick={handleVerifyOtp}
        />
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
