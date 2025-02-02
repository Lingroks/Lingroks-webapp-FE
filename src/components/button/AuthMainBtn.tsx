import React from "react";

interface AuthMainBtnProps {
  text?: string;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean; // Added disabled prop
}

export default function AuthMainBtn({
  text = 'string',
  className = '',
  onClick,
  disabled = false, // Default value for disabled
}: AuthMainBtnProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled} // Pass disabled to the button
      className={`${className} rounded-[60px] ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`} // Add styles for disabled state
    >
      {text}
    </button>
  );
}
