import React from "react";


interface AuthMainBtnProps {
    text?: string;
    type?: 'submit' | 'reset' | 'button';
    className?: string;
}

export default function AuthMainBtn({
    text = 'string', 
    type = 'submit',
    className = '',
}: AuthMainBtnProps) {
    return(
        <button
        type={type}
        className={`${className} rounded-[60px]`}>
            {text}
        </button>
    )
}