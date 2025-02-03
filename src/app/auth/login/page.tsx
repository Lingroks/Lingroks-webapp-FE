'use client';
import React from 'react';
import { useState } from 'react';
// import type { Metadata } from 'next';
import Link from 'next/link';
import AuthLayout from '../AuthLayout';
import AuthButton from '@/components/button/AuthButton';
import AuthInputBox from '@/components/input/AuthInputBox';
import AuthMainBtn from '@/components/button/AuthMainBtn';
import { loginUser } from '../../../services/authService';
import { useRouter } from 'next/navigation';
import { useUser } from '../../../context/UserContext';
import { ToastContainer } from 'react-toastify';

// export const metadata: Metadata = {
//   title: 'Log In',
//   description: 'Log in to access your dashboard and other lingroks features.',
// };

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { updateUser } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Before setLoading:', loading); // Debug log
    if (loading) return; // Prevent double submissions
    setLoading(true);
    try {
      await loginUser(email, password, router.push, updateUser);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthLayout>
        <div className="w-full flex items-center justify-center flex-col max-w-[430px] my-0 mx-auto px-5 pb-5">
          <h1 className="text-black text-[2rem] font-inter-medium mb-1 text-center">
            Welcome Back
          </h1>
          <p className="text-textGrey text-[16px] font-inter-regular mb-4 leading-normal text-center">
            Login to your account
          </p>
          <div className="flex justify-between flex-col items-center w-full gap-3 mb-4 sm:flex-row sm:gap-2">
            <AuthButton
              icon="/google.svg"
              text="Continue with Google"
              className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-textGrey w-full"
            />
            <AuthButton
              icon="/microsoft.svg"
              text="Continue with Microsoft"
              className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-textGrey w-full"
            />
          </div>
          <div className="flex items-center justify-between text-base text-textGrey leading-3 font-inter-regular my-4 gap-2 w-full">
            <div className="h-[.5px] bg-secondaryGrey w-[45%]"></div>
            <span className="block text-base text-secondaryGrey font-inter-medium">
              Or
            </span>
            <div className="h-[.5px] bg-secondaryGrey w-[45%]"></div>
          </div>
          <form
            action=""
            className="flex flex-col items-start justify-start w-full"
          >
            <AuthInputBox
              label="Email Address"
              type="email"
              placeholder="Your email address"
              value={email}
              id="email"
              required={true}
              forgotPassword={false}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-6 text-secondaryGrey"
            />
            <AuthInputBox
              label="Password"
              type="password"
              placeholder="Your password"
              id="password"
              value={password}
              required={true}
              forgotPassword={true}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-6"
            />
            <div className="w-full ">
              <AuthMainBtn
                text={loading ? '...' : 'Login'}
                className={`w-full border-none rounded-[60px] py-2 px-4 mb-2 ${
                  !loading
                    ? 'bg-secondaryBlue text-white'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
                onClick={handleLogin}
                disabled={loading}
              />
              <p className="text-center text-black font-inter-regular leading-3">
                Don&apos;t have an account?
                <Link href="/auth/signup" className="text-mainBlue ml-1">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </AuthLayout>
      <ToastContainer toastClassName="text-sm font-inter-regular" />
    </>
  );
};

export default Login;
