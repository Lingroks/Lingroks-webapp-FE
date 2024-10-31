import React from "react";

export default function AuthButton({icon, text = '', className = ''}) {
  return(
    <button className={`${className} py-2 px-4 rounded-[60px]`}>
        <div className='flex items-center justify-center'>
            <span className='mr-2'>{icon}</span>
            <span className="ml-2 block text-[.7rem]">{text}</span>
        </div>
    </button>
  )
}