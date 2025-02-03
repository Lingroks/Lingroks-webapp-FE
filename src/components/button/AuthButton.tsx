import React from "react";

interface AuthButtonProps {
  icon: string;
  text?: string;
  className?: string;
  alt?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  icon,
  className = '',
  alt = '',
}) => {
  return (
    <button  className={`${className} py-1 px-1 rounded-[8px] flex items-center justify-center`}>
      <div className="flex items-center justify-center">
        <img src={icon} alt={alt} className="mr-0 w-[40px]" />
      </div>
    </button>
  );
};

export default AuthButton;
