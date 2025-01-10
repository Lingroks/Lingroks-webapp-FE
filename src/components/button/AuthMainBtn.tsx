import React from "react";


interface AuthMainBtnProps {
    text?: string;
    type?: 'submit' | 'reset' | 'button';
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function AuthMainBtn({
    text = 'string', 
    className = '',
    onClick,
}: AuthMainBtnProps) {
    return(
        <button
        onClick={onClick}
        className={`${className} rounded-[60px]`}>
            {text}
        </button>
    )
}