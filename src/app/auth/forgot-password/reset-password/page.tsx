'use client';
import AuthInputBox from '@/components/input/AuthInputBox';
import React, { useState } from 'react';
import AuthLayout from '@/app/auth/AuthLayout';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import { useRouter } from 'next/navigation';
import { resetPassword } from '../../../../services/authService';
// import { validatePassword } from '@/utils/passwordValidation';
// import SetOtpInput from '@/components/input/SetOtpInput';
import ForgotPasswordPic from '../ForgotPasswordPic';
import { ToastContainer, toast } from 'react-toastify';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  //   const [confirmPassword, setConfirmPassword] = React.useState('');

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLongEnough = password.length > 8;

    if (!hasUpperCase || !hasNumber || !isLongEnough) {
      console.log('everrrrrrrrrryyyyyyyyyy');
      return 'Password must contain at least 1 uppercase letter, 1 number, and be longer than 8 characters.';
    }
    return '';
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !otp || !password) {
      toast.error('Please fill out all fields');
      return;
    }

    if (passwordError) {
      toast.error(
        'Fix the password issues before submitting. Password may not be strong enough'
      );
      return;
    }

    try {
      setIsLoading(true);
      await resetPassword(email, password, otp, router.push);
      // router.push('/reset-successful');
    } catch (error) {
      console.log(error);
      // toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto px-5 pb-5">
        <div className="flex items-center justify-center mb-2">
          <ForgotPasswordPic pic="/password.svg" alt="password icon" />
        </div>
        <h1 className="text-black text-[2rem] font-inter-medium mb-1">
          Set a new password
        </h1>
        <p className="text-textGrey text-[16px] font-inter-regular mb-4 leading-normal">
          Must be at least 8 characters long
        </p>
        <form
          action=""
          className="flex flex-col items-start justify-start w-full"
          onSubmit={handleSubmit}
        >
          <AuthInputBox
            label="Email"
            type="email"
            placeholder="Your Email"
            value={email}
            id="password"
            required={true}
            forgotPassword={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            className="mb-6 text-secondaryGrey"
          />
          <AuthInputBox
            label="One time Password(OTP)"
            type="text"
            placeholder=""
            id="password"
            value={otp}
            required={true}
            forgotPassword={false}
            onChange={(e) => setOtp(e.target.value)}
            className="mb-6"
          />
          <AuthInputBox
            label="New Password"
            type="password"
            placeholder="......."
            id="password"
            value={password}
            required={true}
            forgotPassword={false}
            onChange={handlePasswordChange}
            className="mb-6"
          />
          {passwordError && (
            <p className="text-red-500 text-sm mb-6">{passwordError}</p>
          )}

          <div className="w-full ">
            <AuthMainBtn
              text={isLoading ? 'Setting Password...' : 'Set new password'}
              className="w-full border-none bg-secondaryBlue text-white rounded-[60px] py-2 px-4 mb-2"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </AuthLayout>
  );
};

export default ResetPassword;
