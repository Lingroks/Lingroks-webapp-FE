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
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={checked}
          readOnly
          className="appearance-none h-5 w-5 border-2 border-[#646464] rounded-md transition-colors checked:border-[#5732E9] checked:bg-[#5732E9]"
        />
      </label>
      <p className="text-[.9rem] text-deepGrey ml-1">{text}</p>
    </div>
  );
};

export default AuthInstruction;
