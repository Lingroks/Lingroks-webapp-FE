'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react'; // You can replace this with any icon library you use

interface AuthInputBoxProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  id: string;
  required: boolean;
  forgotPassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const AuthInputBox: React.FC<AuthInputBoxProps> = ({
  label,
  type,
  placeholder,
  value,
  id,
  required,
  forgotPassword = false,
  onChange,
  className,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={`${className} w-full flex items-start justify-start flex-col`}>
      <div className="flex items-start justify-between w-full">
        <label htmlFor={id} className="text-sm text-black leading-3 font-inter-regular mb-3">
          {label}
        </label>
        {forgotPassword && (
          <Link href="/auth/forgot-password" className="text-secondaryBlue text-sm leading-3 font-inter-regular">
            Forgot Password?
          </Link>
        )}
      </div>
      <div className="relative w-full">
        <input
          type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          id={id}
          required={required}
          onChange={onChange}
          className="w-full bg-inputGrey border-gray-300 focus:border-gray-500 focus:outline-none focus:bg-inputGrey px-[24px] rounded-[60px] py-[8px] shadow-none pr-10"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInputBox;
