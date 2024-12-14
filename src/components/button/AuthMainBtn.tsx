import React from "react";


interface AuthMainBtnProps {
    text?: string;
    type?: 'submit' | 'reset' | 'button';
    className?: string;
}

export default function AuthMainBtn({
    text = 'string', 
    className = '',
}: AuthMainBtnProps) {
    return(
        <button
        className={`${className} rounded-[60px]`}>
            {text}
        </button>
    )
}