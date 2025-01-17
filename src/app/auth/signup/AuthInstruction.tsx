import React from 'react';

interface AuthInstructionProps {
  text: string;
  checked?: boolean;
}

const AuthInstruction: React.FC<AuthInstructionProps> = ({
  text,
  checked = false,
}) => {
  return (
    <div className="flex items-center justify-start">
      <label
        htmlFor="checked-checkbox"
        className="flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          readOnly
          // disabled
          id="checked-checkbox"
          checked={checked}
          className={`w-4 h-4 border-2 rounded-full transition-colors duration-300 ${
            checked
              ? 'bg-[#5732E9] border-[#5732E9]'
              : 'bg-[#F5F5F5] border-[#646464]'
          }`}
        />
      </label>
      <p className="text-[.9rem] text-deepGrey ml-2">{text}</p>
    </div>
  );
};

export default AuthInstruction;
