import React from "react";

export default function AuthButton({icon, text = '', className = '', alt = ''}) {
  return(
    <button className={`${className} py-2 px-4 rounded-[60px]`}>
        <div className='flex items-center justify-center'>
            <img src={icon} alt={alt} className='mr-2 w-[20px]' />
            <span className="ml-1 block text-[1rem] sm:text-[.7rem]">{text}</span>
        </div>
    </button>
  )
}